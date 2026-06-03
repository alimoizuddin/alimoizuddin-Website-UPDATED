# Phantom-Spend SaaS Auditor

A SaaS spend auditing prototype that ingests messy CSV data, routes it through an n8n/GPT reasoning backend, flags redundant subscriptions, and visualizes wasted capital in a lightweight frontend.

## Included

- `screenshots/` - dashboard, KPI output, audit table, n8n backend, reasoning prompt, sanitized JSON, and messy CSV test result.
- `docs/` - project explainer documents.
- `demo/Phantom-Spend SaaS Auditor.mp4` - demo recording.
- `workflows/phantom-spend-saas-auditor.sanitized.json` - sanitized n8n workflow export.
- `src/index.sanitized.html` - frontend prototype with live webhook URL replaced by a placeholder.

## Sanitization

The workflow export has credential blocks and webhook IDs removed. The frontend HTML has the live n8n webhook URL replaced with `https://YOUR_N8N_DOMAIN/webhook/YOUR_WEBHOOK_ID`.
