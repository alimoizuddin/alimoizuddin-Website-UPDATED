# OmniTranscriber Pro

Public proof archive for Ali Moizuddin's bilingual transcription system.

OmniTranscriber Pro is a local-first and Google Colab-ready transcription workspace built for messy lecture audio, especially Hinglish workflows where Hindi and English switch inside the same recording.

## The Problem

The original failure was not simply "bad transcription." It was trust.

In mixed-language lectures, the system could preserve fragments of sound while losing the human context around them. Code-switching, noisy segments, uncertain model guesses, and garbled words made the transcript hard to use without re-listening to the original audio.

The real bottleneck became: how do you know which lines need human review?

## The System

The final build turns transcription into a review workflow:

- Upload audio/video files, record from the browser, or paste public media links.
- Run Whisper transcription through `faster-whisper`, with OpenAI Whisper as a fallback path.
- Add domain prompts and glossary rules for names, lecture terms, and recurring vocabulary.
- Convert model log probabilities into confidence scores.
- Flag low-confidence segments instead of hiding uncertainty.
- Edit transcript segments and speaker labels after the job finishes.
- Export TXT, Markdown, SRT, VTT, JSON, and a ZIP bundle.
- Run locally through FastAPI or in Google Colab with a GPU notebook.

## Architecture

```text
Audio / video / URL / microphone
        |
        v
FastAPI job manager
        |
        v
Preprocessing with FFmpeg when available
        |
        v
Whisper transcription engine
        |
        v
Glossary + domain prompt layer
        |
        v
Confidence scoring + low-confidence flags
        |
        v
Human review editor
        |
        v
TXT / SRT / VTT / MD / JSON / ZIP exports
```

## What Was Verified

- Python source parses successfully.
- The Colab notebook is valid JSON and contains 8 cells.
- Smoke tests pass on Python 3.11: 4 passed.
- The public package was rebuilt without Python cache folders, pytest cache, or the local SQLite runtime database.

## Honest Scope

This archive does not claim a fixed accuracy percentage. The point of the build is not "the model is always right." The point is that uncertain lines are surfaced for review, so the operator can trust the final transcript.

This is a self-directed system build, not a paid client result.
