import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { LogOut, Save, Upload, Trash2, ChevronDown, ChevronRight, Copy, ExternalLink, Mail, Inbox } from "lucide-react";
import { useAuth, adminClient } from "../context/AuthContext";
import { useContentMeta } from "../context/ContentContext";

const SECTION_DEFS = [
  { key: "profile", label: "Profile", kind: "object" },
  { key: "socials", label: "Social Links", kind: "list" },
  { key: "stats", label: "Headline Stats", kind: "list" },
  { key: "about", label: "About — Quote + Paragraphs", kind: "object" },
  { key: "philosophy", label: "Philosophy", kind: "object" },
  { key: "competencies", label: "Skills", kind: "list" },
  { key: "projects", label: "Projects", kind: "list" },
  { key: "agents", label: "Agents", kind: "list" },
  { key: "experience", label: "Experience", kind: "list" },
  { key: "certifications", label: "Certifications", kind: "list" },
  { key: "education", label: "Education", kind: "list" },
  { key: "contactCards", label: "Contact Cards", kind: "list" },
  { key: "stackMarquee", label: "Stack Marquee (strings)", kind: "stringList" },
  { key: "projectCategories", label: "Project Categories", kind: "stringList" },
];

function JSONEditor({ value, onChange, rows = 18 }) {
  const [text, setText] = useState(() => JSON.stringify(value ?? null, null, 2));
  const [err, setErr] = useState("");
  useEffect(() => {
    setText(JSON.stringify(value ?? null, null, 2));
  }, [value]);
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          try {
            const parsed = JSON.parse(e.target.value);
            setErr("");
            onChange(parsed);
          } catch (er) {
            setErr(er.message);
          }
        }}
        rows={rows}
        spellCheck={false}
        className="w-full bg-[#0D0D0D] border border-[#888880]/30 px-4 py-3 text-[#F5F0E8] font-mono text-[12px] leading-relaxed focus:border-[#C9A84C] focus:outline-none"
      />
      {err && <div className="text-red-400 text-xs font-mono mt-2">JSON error: {err}</div>}
    </div>
  );
}

function SectionPanel({ section, value, onSave, onCancel, busy }) {
  const [localValue, setLocalValue] = useState(value);
  useEffect(() => setLocalValue(value), [value]);

  return (
    <div className="border border-[#C9A84C]/20 bg-[#111116] p-6 md:p-8" data-testid={`admin-panel-${section.key}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
            Editing
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0E8] tracking-tight mt-1">
            {section.label}
          </h2>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-[#888880]/30 text-[#888880] font-mono text-[10px] uppercase tracking-[0.22em] hover:border-[#F5F0E8] hover:text-[#F5F0E8] transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSave(localValue)}
            disabled={busy}
            data-testid={`admin-save-${section.key}`}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[10px] uppercase tracking-[0.22em] hover:bg-[#F5F0E8] transition-colors disabled:opacity-60"
          >
            <Save className="w-3.5 h-3.5" />
            {busy ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      <p className="text-[#888880] text-sm mb-4">
        Edit the JSON below. The site reads from here on next refresh. Add, remove, or reorder
        items freely. Be careful with quotes — JSON requires double quotes around strings.
      </p>

      <JSONEditor value={localValue} onChange={setLocalValue} />
    </div>
  );
}

function ImageUploader({ token, onUploaded }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [uploads, setUploads] = useState([]);
  const api = adminClient(token);

  const refresh = useCallback(async () => {
    try {
      const { data } = await api.get("/admin/uploads");
      setUploads(data);
    } catch {
      /* ignore */
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const onPick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr("");
    try {
      const form = new FormData();
      form.append("file", file);
      const { data } = await api.post("/admin/upload", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onUploaded?.(data);
      await refresh();
    } catch (er) {
      setErr(er?.response?.data?.detail || er.message);
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  };

  const deleteOne = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    await api.delete(`/admin/uploads/${id}`);
    refresh();
  };

  const fullUrl = (path) => `${process.env.REACT_APP_BACKEND_URL}${path}`;

  return (
    <div className="border border-[#C9A84C]/20 bg-[#111116] p-6 md:p-8" data-testid="admin-uploads-panel">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
            Media
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0E8] tracking-tight mt-1">
            Image Library
          </h2>
        </div>
        <label className="inline-flex items-center gap-2 px-5 py-2 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[10px] uppercase tracking-[0.22em] hover:bg-[#F5F0E8] transition-colors cursor-pointer">
          <Upload className="w-3.5 h-3.5" />
          {busy ? "Uploading..." : "Upload Image"}
          <input type="file" accept="image/*" onChange={onPick} className="hidden" data-testid="admin-upload-input" />
        </label>
      </div>

      <p className="text-[#888880] text-sm mb-6">
        Upload images here, then paste the returned URL into any image field (e.g. profile photo).
        Max 5MB per image. Click the URL to copy.
      </p>

      {err && <div className="text-red-400 text-xs font-mono mb-4">{err}</div>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {uploads.map((u) => (
          <div key={u.id} className="border border-[#888880]/20 p-2 group relative" data-testid={`admin-upload-${u.id}`}>
            <img src={fullUrl(`/api/uploads/${u.id}`)} alt={u.filename} className="w-full aspect-square object-cover" />
            <div className="mt-2 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard?.writeText(fullUrl(`/api/uploads/${u.id}`));
                }}
                className="text-[#C9A84C] hover:text-[#F5F0E8] transition-colors"
                title="Copy URL"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
              <a
                href={fullUrl(`/api/uploads/${u.id}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888880] hover:text-[#C9A84C] transition-colors"
                title="Open"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => deleteOne(u.id)}
                className="text-[#888880] hover:text-red-400 transition-colors"
                title="Delete"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {uploads.length === 0 && (
        <p className="text-[#888880] text-sm font-mono">No images uploaded yet.</p>
      )}
    </div>
  );
}

function InquiriesPanel({ token }) {
  const api = adminClient(token);
  const [messages, setMessages] = useState([]);
  const [intents, setIntents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("messages");

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const [m, i] = await Promise.all([
        api.get("/admin/contact-messages"),
        api.get("/admin/contact-intents"),
      ]);
      setMessages(m.data || []);
      setIntents(i.data || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const unreadCount = messages.filter((m) => !m.read).length;

  const markRead = async (id) => {
    await api.put(`/admin/contact-messages/${id}/read`);
    refresh();
  };
  const deleteMsg = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await api.delete(`/admin/contact-messages/${id}`);
    refresh();
  };

  const fmt = (ts) => {
    try {
      return new Date(ts).toLocaleString("en-US", {
        month: "short", day: "numeric", year: "numeric",
        hour: "2-digit", minute: "2-digit",
      });
    } catch {
      return ts;
    }
  };

  return (
    <div className="border border-[#C9A84C]/20 bg-[#111116] p-6 md:p-8" data-testid="admin-inquiries-panel">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-4">
          <Inbox className="w-5 h-5 text-[#C9A84C]" />
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C9A84C]">
              Inbox
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0E8] tracking-tight mt-1">
              Inquiries
            </h2>
          </div>
          {unreadCount > 0 && (
            <span className="inline-flex items-center px-2.5 py-1 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[10px] uppercase tracking-[0.22em]" data-testid="admin-unread-badge">
              {unreadCount} new
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={refresh}
          className="px-4 py-2 border border-[#888880]/30 text-[#888880] font-mono text-[10px] uppercase tracking-[0.22em] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
        >
          Refresh
        </button>
      </div>

      <div className="flex gap-3 mb-6 border-b border-[#C9A84C]/15">
        <button
          type="button"
          onClick={() => setTab("messages")}
          data-testid="admin-tab-messages"
          className={`pb-3 -mb-px font-mono text-[10px] uppercase tracking-[0.25em] border-b-2 transition-colors ${
            tab === "messages" ? "text-[#C9A84C] border-[#C9A84C]" : "text-[#888880] border-transparent hover:text-[#F5F0E8]"
          }`}
        >
          Messages ({messages.length})
        </button>
        <button
          type="button"
          onClick={() => setTab("intents")}
          data-testid="admin-tab-intents"
          className={`pb-3 -mb-px font-mono text-[10px] uppercase tracking-[0.25em] border-b-2 transition-colors ${
            tab === "intents" ? "text-[#C9A84C] border-[#C9A84C]" : "text-[#888880] border-transparent hover:text-[#F5F0E8]"
          }`}
        >
          Click Log ({intents.length})
        </button>
      </div>

      {loading && (
        <p className="text-[#888880] font-mono text-xs">Loading…</p>
      )}

      {!loading && tab === "messages" && (
        messages.length === 0 ? (
          <p className="text-[#888880] text-sm">No messages yet.</p>
        ) : (
          <div className="space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                data-testid={`inquiry-${m.id}`}
                className={`p-5 border ${m.read ? "border-[#888880]/15" : "border-[#C9A84C]/40"} bg-[#0D0D0D]`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-serif text-[#F5F0E8] text-lg md:text-xl">
                        {m.name}
                      </span>
                      <a
                        href={`mailto:${m.email}`}
                        className="font-mono text-[11px] text-[#C9A84C] hover:text-[#F5F0E8] transition-colors inline-flex items-center gap-1.5"
                      >
                        <Mail className="w-3 h-3" />
                        {m.email}
                      </a>
                      {!m.read && (
                        <span className="px-2 py-0.5 bg-[#C9A84C]/20 text-[#C9A84C] font-mono text-[9px] uppercase tracking-[0.22em]">
                          new
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880] mt-1.5">
                      {m.kind} · {fmt(m.timestamp)}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!m.read && (
                      <button
                        type="button"
                        onClick={() => markRead(m.id)}
                        data-testid={`inquiry-mark-read-${m.id}`}
                        className="px-3 py-1.5 border border-[#888880]/30 text-[#888880] font-mono text-[10px] uppercase tracking-[0.22em] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                      >
                        Mark read
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => deleteMsg(m.id)}
                      className="px-3 py-1.5 border border-[#888880]/30 text-[#888880] font-mono text-[10px] uppercase tracking-[0.22em] hover:border-red-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <p className="text-[#F5F0E8] text-[14px] leading-relaxed whitespace-pre-wrap">
                  {m.message}
                </p>
              </div>
            ))}
          </div>
        )
      )}

      {!loading && tab === "intents" && (
        intents.length === 0 ? (
          <p className="text-[#888880] text-sm">No card clicks logged yet.</p>
        ) : (
          <div className="space-y-2">
            {intents.map((i) => (
              <div key={i.id} className="flex items-center justify-between gap-4 p-3 border border-[#888880]/15 bg-[#0D0D0D]">
                <div>
                  <div className="font-mono text-[11px] text-[#C9A84C] uppercase tracking-[0.22em]">
                    {i.kind}
                  </div>
                  <div className="text-[#F5F0E8] text-sm mt-0.5">{i.subject}</div>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
                  {fmt(i.timestamp)}
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const { user, loading, logout, token } = useAuth();
  const { content, refresh } = useContentMeta();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState("");
  const api = adminClient(token);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(""), 2400);
      return () => clearTimeout(t);
    }
  }, [toast]);

  if (!loading && !user) {
    return <Navigate to="/admin/login" replace />;
  }
  if (loading) {
    return (
      <main className="min-h-screen bg-[#0D0D0D] text-[#888880] flex items-center justify-center">
        <span className="font-mono text-xs uppercase tracking-widest">Loading admin…</span>
      </main>
    );
  }

  const onSave = async (section, value) => {
    setBusy(true);
    try {
      await api.put(`/admin/content/${section}`, { value });
      await refresh();
      setToast(`${section} saved`);
      setEditing(null);
    } catch (e) {
      setToast(`Error: ${e?.response?.data?.detail || e.message}`);
    } finally {
      setBusy(false);
    }
  };

  const summarize = (section) => {
    const v = content?.[section.key];
    if (section.kind === "list" || section.kind === "stringList") {
      return Array.isArray(v) ? `${v.length} items` : "—";
    }
    if (section.kind === "object" && v && typeof v === "object") {
      return Object.keys(v).slice(0, 3).join(" · ");
    }
    return "—";
  };

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">
      <header className="border-b border-[#C9A84C]/15 bg-[#0D0D0D]/85 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/" className="font-serif text-[#C9A84C] text-xl tracking-[0.18em]">
              ALI MOIZUDDIN
            </Link>
            <span className="block w-6 h-px bg-[#C9A84C]/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
              Admin · {user?.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#888880]/30 text-[#F5F0E8] font-mono text-[10px] uppercase tracking-[0.22em] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              data-testid="admin-view-site"
            >
              <ExternalLink className="w-3.5 h-3.5" /> View site
            </Link>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate("/admin/login");
              }}
              data-testid="admin-logout"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#888880]/30 text-[#888880] font-mono text-[10px] uppercase tracking-[0.22em] hover:border-red-400 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <h1 className="font-serif text-[#F5F0E8] text-4xl md:text-5xl font-light tracking-tight leading-none">
          Content <span className="italic text-[#C9A84C]">manager.</span>
        </h1>
        <p className="text-[#888880] text-sm md:text-base mt-4 max-w-2xl">
          Every section of the public site is editable here. Changes go live immediately on next page load.
        </p>

        {toast && (
          <div className="mt-6 inline-block px-4 py-2 border border-[#C9A84C]/60 text-[#C9A84C] font-mono text-[10px] uppercase tracking-[0.22em]" data-testid="admin-toast">
            {toast}
          </div>
        )}

        <div className="mt-10 space-y-4">
          {SECTION_DEFS.map((section) => {
            const isOpen = openSection === section.key;
            const isEditing = editing?.key === section.key;
            return (
              <div key={section.key} className="border border-[#C9A84C]/15">
                <button
                  type="button"
                  onClick={() => {
                    setOpenSection(isOpen ? null : section.key);
                    setEditing(null);
                  }}
                  className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-[#111116] transition-colors text-left"
                  data-testid={`admin-toggle-${section.key}`}
                >
                  <div className="flex items-center gap-4">
                    {isOpen ? <ChevronDown className="w-4 h-4 text-[#C9A84C]" /> : <ChevronRight className="w-4 h-4 text-[#888880]" />}
                    <span className="font-serif text-[#F5F0E8] text-xl md:text-2xl tracking-tight">
                      {section.label}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
                    {summarize(section)}
                  </span>
                </button>

                {isOpen && !isEditing && (
                  <div className="border-t border-[#C9A84C]/10 p-5 md:p-6 flex items-center justify-between bg-[#0D0D0D]">
                    <pre className="text-[#888880] font-mono text-[11px] leading-relaxed max-h-44 overflow-auto flex-1 mr-6 whitespace-pre-wrap">
                      {JSON.stringify(content?.[section.key], null, 2)?.slice(0, 600)}
                      {JSON.stringify(content?.[section.key], null, 2)?.length > 600 ? "\n…" : ""}
                    </pre>
                    <button
                      type="button"
                      onClick={() => setEditing(section)}
                      data-testid={`admin-edit-${section.key}`}
                      className="px-5 py-2 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[10px] uppercase tracking-[0.22em] hover:bg-[#F5F0E8] transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                )}

                {isEditing && (
                  <div className="border-t border-[#C9A84C]/10 p-5 md:p-6 bg-[#0D0D0D]">
                    <SectionPanel
                      section={section}
                      value={content?.[section.key]}
                      busy={busy}
                      onSave={(v) => onSave(section.key, v)}
                      onCancel={() => setEditing(null)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <InquiriesPanel token={token} />
        </div>

        <div className="mt-10">
          <ImageUploader token={token} onUploaded={() => setToast("Image uploaded")} />
        </div>
      </div>
    </main>
  );
}
