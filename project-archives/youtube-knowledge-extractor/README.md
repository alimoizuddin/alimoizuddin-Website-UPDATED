# YouTube Knowledge Extraction Engine

A local Gradio app that extracts YouTube channel subtitles with `yt-dlp`, stitches transcripts, and exports NotebookLM-ready mega files for large-scale knowledge extraction and digital-twin workflows.

## Included

- `src/app.py` - cleaned app source.
- `src/requirements.txt` - Python dependencies.
- `screenshots/Youtube Scrapper- Backend and Frontend.png` - backend/frontend proof screenshot.
- `docs/Read Me.pdf` - original explainer document.

## Notes

Generated transcript output folders are excluded because they can contain very large extracted content. The source app recreates those folders locally when run.
