from dotenv import load_dotenv
from pathlib import Path
import os


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")


from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request, UploadFile, File, Response
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Any, Dict
from datetime import datetime, timezone, timedelta
import logging
import uuid
import json
import base64
import bcrypt
import jwt as pyjwt


from seed_data import build_initial_content


# ---------------- Config & DB ----------------
JWT_SECRET = os.environ.get("JWT_SECRET", "dev-secret-change-me")
JWT_ALGORITHM = "HS256"
JWT_EXP_DAYS = 7


ADMIN_EMAIL = os.environ.get("ADMIN_EMAIL", "admin@example.com")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "admin123")


mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]


app = FastAPI(title="Ali Moizuddin — Personal Brand API")
api_router = APIRouter(prefix="/api")


logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)




# ---------------- Auth helpers ----------------
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")




def verify_password(plain: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False




def create_token(email: str) -> str:
    payload = {
        "sub": email,
        "exp": datetime.now(timezone.utc) + timedelta(days=JWT_EXP_DAYS),
        "iat": datetime.now(timezone.utc),
        "type": "access",
    }
    return pyjwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)




async def get_current_admin(request: Request) -> dict:
    auth_header = request.headers.get("Authorization", "")
    if not auth_header.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = auth_header[7:]
    try:
        payload = pyjwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        email = payload.get("sub")
        if not email:
            raise HTTPException(status_code=401, detail="Invalid token")
        user = await db.users.find_one({"email": email}, {"_id": 0, "password_hash": 0})
        if not user or user.get("role") != "admin":
            raise HTTPException(status_code=401, detail="Not authorized")
        return user
    except pyjwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except pyjwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")




# ---------------- Models ----------------
class LoginIn(BaseModel):
    email: str
    password: str




class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))




class StatusCheckCreate(BaseModel):
    client_name: str




class ContactIntentCreate(BaseModel):
    kind: str
    subject: str
    source: Optional[str] = ""




class ContactIntent(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    kind: str
    subject: str
    source: Optional[str] = ""
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))




class ContactMessageCreate(BaseModel):
    kind: str
    name: str
    email: str
    message: str
    source: Optional[str] = ""




class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    kind: str
    name: str
    email: str
    message: str
    source: Optional[str] = ""
    read: bool = False
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))




class AnalyticsEventCreate(BaseModel):
    event: str
    payload: Optional[dict] = None
    source: Optional[str] = ""




class AnalyticsEvent(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    event: str
    payload: Optional[dict] = None
    source: Optional[str] = ""
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))




class ContentSectionUpdate(BaseModel):
    value: Any




# ---------------- Public endpoints ----------------
@api_router.get("/")
async def root():
    return {"message": "Ali Moizuddin — Personal Brand API", "status": "ok"}




@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "personal-brand", "time": datetime.now(timezone.utc).isoformat()}




@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    obj = StatusCheck(**payload.model_dump())
    doc = obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return obj




@api_router.get("/status", response_model=List[StatusCheck])
async def list_status_checks():
    out = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in out:
        if isinstance(r.get("timestamp"), str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return out




@api_router.post("/contact-intent", response_model=ContactIntent)
async def log_contact_intent(payload: ContactIntentCreate):
    obj = ContactIntent(**payload.model_dump())
    doc = obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.contact_intents.insert_one(doc)
    return obj




@api_router.get("/contact-intent", response_model=List[ContactIntent])
async def list_contact_intents():
    out = await db.contact_intents.find({}, {"_id": 0}).sort("timestamp", -1).to_list(500)
    for r in out:
        if isinstance(r.get("timestamp"), str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return out




@api_router.post("/contact-message", response_model=ContactMessage)
async def submit_contact_message(payload: ContactMessageCreate):
    """Public: visitor sends a message via the Contact form."""
    obj = ContactMessage(**payload.model_dump())
    doc = obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.contact_messages.insert_one(doc)
    return obj




@api_router.get("/admin/contact-messages", response_model=List[ContactMessage])
async def list_contact_messages(user: dict = Depends(get_current_admin)):
    out = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).to_list(500)
    for r in out:
        if isinstance(r.get("timestamp"), str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return out




@api_router.put("/admin/contact-messages/{msg_id}/read")
async def mark_message_read(msg_id: str, user: dict = Depends(get_current_admin)):
    res = await db.contact_messages.update_one({"id": msg_id}, {"$set": {"read": True}})
    return {"updated": res.modified_count}




@api_router.delete("/admin/contact-messages/{msg_id}")
async def delete_message(msg_id: str, user: dict = Depends(get_current_admin)):
    res = await db.contact_messages.delete_one({"id": msg_id})
    return {"deleted": res.deleted_count}




@api_router.get("/admin/contact-intents", response_model=List[ContactIntent])
async def admin_list_contact_intents(user: dict = Depends(get_current_admin)):
    out = await db.contact_intents.find({}, {"_id": 0}).sort("timestamp", -1).to_list(500)
    for r in out:
        if isinstance(r.get("timestamp"), str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return out




@api_router.post("/analytics/event", response_model=AnalyticsEvent)
async def log_analytics(payload: AnalyticsEventCreate):
    obj = AnalyticsEvent(**payload.model_dump())
    doc = obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.analytics_events.insert_one(doc)
    return obj




@api_router.get("/analytics/event", response_model=List[AnalyticsEvent])
async def list_analytics(limit: int = 500, event: Optional[str] = None):
    q = {"event": event} if event else {}
    out = await db.analytics_events.find(q, {"_id": 0}).sort("timestamp", -1).to_list(limit)
    for r in out:
        if isinstance(r.get("timestamp"), str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return out




@api_router.get("/analytics/summary")
async def analytics_summary():
    pipeline = [{"$group": {"_id": "$event", "count": {"$sum": 1}}}, {"$sort": {"count": -1}}]
    grouped = await db.analytics_events.aggregate(pipeline).to_list(100)
    return {
        "totals": {row["_id"]: row["count"] for row in grouped},
        "total_events": sum(row["count"] for row in grouped),
    }




# ---------------- Content (public read) ----------------
CONTENT_SECTIONS = [
    "profile", "socials", "stats", "philosophy", "about", "contactCards",
    "competencies", "agents", "experience", "certifications", "education",
    "projectCategories", "stackMarquee", "projects",
]




@api_router.get("/content")
async def get_all_content(response: Response):
    """Returns the full content map. Frontend uses this on boot."""
    response.headers["Cache-Control"] = "public, max-age=60, stale-while-revalidate=600"
    doc = await db.site_content.find_one({"_id": "current"}) or {}
    if not doc:
        return {}
    doc.pop("_id", None)
    return doc




@api_router.get("/content/{section}")
async def get_content_section(section: str, response: Response):
    response.headers["Cache-Control"] = "public, max-age=60, stale-while-revalidate=600"
    if section not in CONTENT_SECTIONS:
        raise HTTPException(status_code=404, detail="Unknown section")
    doc = await db.site_content.find_one({"_id": "current"}, {"_id": 0, section: 1}) or {}
    return {section: doc.get(section)}




# ---------------- Auth endpoints ----------------
@api_router.post("/auth/login")
async def login(payload: LoginIn):
    email = payload.email.strip().lower()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(payload.password, user.get("password_hash", "")):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_token(email)
    return {
        "token": token,
        "user": {"email": user["email"], "name": user.get("name", "Admin"), "role": user.get("role", "admin")},
    }




@api_router.get("/auth/me")
async def me(user: dict = Depends(get_current_admin)):
    return user




# ---------------- Admin: content CRUD ----------------
@api_router.put("/admin/content/{section}")
async def update_content_section(
    section: str,
    payload: ContentSectionUpdate,
    user: dict = Depends(get_current_admin),
):
    if section not in CONTENT_SECTIONS:
        raise HTTPException(status_code=400, detail="Unknown section")
    await db.site_content.update_one(
        {"_id": "current"},
        {"$set": {section: payload.value, "updated_at": datetime.now(timezone.utc).isoformat()}},
        upsert=True,
    )
    return {"ok": True, "section": section}




@api_router.get("/admin/content")
async def admin_get_content(user: dict = Depends(get_current_admin)):
    """Same as public /content but explicit admin route — used by dashboard."""
    doc = await db.site_content.find_one({"_id": "current"}) or {}
    doc.pop("_id", None)
    return doc




# ---------------- Admin: image upload ----------------
@api_router.post("/admin/upload")
async def upload_image(
    file: UploadFile = File(...),
    user: dict = Depends(get_current_admin),
):
    """Accepts an image, stores it base64-encoded in MongoDB.
    Returns a URL that serves the image back through /api/uploads/{id}."""
    contents = await file.read()
    if len(contents) > 5 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="Image must be under 5MB")
    encoded = base64.b64encode(contents).decode("ascii")
    image_id = str(uuid.uuid4())
    await db.uploads.insert_one({
        "_id": image_id,
        "filename": file.filename,
        "content_type": file.content_type or "image/jpeg",
        "data": encoded,
        "size": len(contents),
        "uploaded_at": datetime.now(timezone.utc).isoformat(),
    })
    return {"id": image_id, "url": f"/api/uploads/{image_id}", "filename": file.filename, "size": len(contents)}




@api_router.get("/uploads/{image_id}")
async def serve_upload(image_id: str):
    from fastapi.responses import Response
    doc = await db.uploads.find_one({"_id": image_id})
    if not doc:
        raise HTTPException(status_code=404, detail="Not found")
    try:
        raw = base64.b64decode(doc["data"])
    except Exception:
        raise HTTPException(status_code=500, detail="Corrupt image")
    return Response(content=raw, media_type=doc.get("content_type", "image/jpeg"), headers={"Cache-Control": "public, max-age=31536000"})




@api_router.get("/admin/uploads")
async def list_uploads(user: dict = Depends(get_current_admin)):
    docs = await db.uploads.find({}, {"data": 0}).sort("uploaded_at", -1).to_list(200)
    for d in docs:
        d["id"] = d.pop("_id")
    return docs




@api_router.delete("/admin/uploads/{image_id}")
async def delete_upload(image_id: str, user: dict = Depends(get_current_admin)):
    res = await db.uploads.delete_one({"_id": image_id})
    return {"deleted": res.deleted_count}




# ---------------- App wiring ----------------
app.include_router(api_router)


app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)




# ---------------- Startup: seed admin + content ----------------
@app.on_event("startup")
async def on_startup():
    # Index
    try:
        await db.users.create_index("email", unique=True)
    except Exception:
        pass


    # Seed / sync admin user
    existing = await db.users.find_one({"email": ADMIN_EMAIL.lower()})
    if existing is None:
        await db.users.insert_one({
            "email": ADMIN_EMAIL.lower(),
            "password_hash": hash_password(ADMIN_PASSWORD),
            "name": "Admin",
            "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logger.info("Seeded admin user: %s", ADMIN_EMAIL)
    elif not verify_password(ADMIN_PASSWORD, existing.get("password_hash", "")):
        await db.users.update_one(
            {"email": ADMIN_EMAIL.lower()},
            {"$set": {"password_hash": hash_password(ADMIN_PASSWORD)}},
        )
        logger.info("Updated admin password from .env")


    # Seed site content if empty
    current = await db.site_content.find_one({"_id": "current"})
    if not current:
        try:
            projects_path = ROOT_DIR / "seed_projects.json"
            projects = json.loads(projects_path.read_text()) if projects_path.exists() else []
        except Exception as e:
            logger.warning("Could not load seed projects: %s", e)
            projects = []
        initial = build_initial_content(projects)
        initial["_id"] = "current"
        initial["updated_at"] = datetime.now(timezone.utc).isoformat()
        await db.site_content.insert_one(initial)
        logger.info("Seeded site_content with %d projects", len(projects))




@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()



























