# Autonomous CI/CD Pipeline

An n8n-based autonomous code review and deployment gate that receives commit/code payloads, sanitizes inputs, enforces schema rules, uses an OpenAI reasoning engine for QA/security review, and returns an automated vulnerability report.

## Included

- `screenshots/` - architecture, schema enforcement, sanitization, vulnerability report, and frontend/backend proof screens.
- `docs/` - architecture explainer documents.
- `demo/Autonomous CI CD Pipeline.mp4` - demo recording.
- `workflows/autonomous-ci-cd-pipeline.sanitized.json` - sanitized n8n workflow export.

## Sanitization

The workflow export has credential blocks and webhook IDs removed. It is intended as proof of architecture and implementation, not as a directly deployable production secret bundle.
