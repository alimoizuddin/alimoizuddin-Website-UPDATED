import glob
import os
import shutil

import gradio as gr
import webvtt
import yt_dlp


def extract_channel(channel_url, progress=gr.Progress()):
    """Extract YouTube captions into NotebookLM-ready mega files."""
    vtt_folder = "vtt_temp"
    save_path = "output_megafiles"

    os.makedirs(vtt_folder, exist_ok=True)
    os.makedirs(save_path, exist_ok=True)

    for file_path in glob.glob(f"{vtt_folder}/*"):
        os.remove(file_path)
    for file_path in glob.glob(f"{save_path}/*"):
        os.remove(file_path)

    progress(0.05, desc="Initializing extraction engine...")

    ydl_opts = {
        "skip_download": True,
        "writeautomaticsub": True,
        "writesubtitles": True,
        "subtitleslangs": ["en", "en-US"],
        "subtitlesformat": "vtt",
        "outtmpl": f"{vtt_folder}/%(id)s.%(ext)s",
        "ignoreerrors": True,
        "quiet": True,
        "sleep_interval": 1,
        "max_sleep_interval": 3,
    }

    progress(0.1, desc="Downloading subtitles...")

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([channel_url])
    except Exception:
        pass

    progress(0.6, desc="Download complete. Compiling mega files...")

    word_limit = 450000
    current_word_count = 0
    file_index = 1
    current_file_content = ""
    saved_files = []

    vtt_files = glob.glob(f"{vtt_folder}/*.vtt")

    if not vtt_files:
        return None, "Error: No subtitles found. Make sure the URL is correct or the channel has captions."

    for file_path in progress.tqdm(vtt_files, desc="Stitching transcripts"):
        try:
            filename = os.path.basename(file_path)
            video_id = filename.split(".")[0]
            captions = webvtt.read(file_path)

            lines = []
            last_text = ""
            for caption in captions:
                text = caption.text.strip().replace("\n", " ")
                if text and text != last_text:
                    lines.append(text)
                    last_text = text

            video_text = " ".join(lines)
            if not video_text:
                continue

            formatted_entry = f"\n\n--- SOURCE VIDEO: https://youtu.be/{video_id} ---\n{video_text}\n"
            current_file_content += formatted_entry
            current_word_count += len(video_text.split())

            if current_word_count >= word_limit:
                save_name = os.path.join(save_path, f"MegaFile_Part{file_index}.txt")
                with open(save_name, "w", encoding="utf-8") as file:
                    file.write(current_file_content)
                saved_files.append(save_name)

                file_index += 1
                current_file_content = ""
                current_word_count = 0
        except Exception:
            continue

    if current_file_content:
        save_name = os.path.join(save_path, f"MegaFile_Part{file_index}.txt")
        with open(save_name, "w", encoding="utf-8") as file:
            file.write(current_file_content)
        saved_files.append(save_name)

    shutil.rmtree(vtt_folder)

    success_msg = (
        f"MISSION ACCOMPLISHED: Successfully processed {len(vtt_files)} videos "
        f"into {len(saved_files)} mega files ready for NotebookLM."
    )
    return saved_files, success_msg


with gr.Blocks(theme=gr.themes.Soft(), title="Knowledge Extractor") as app:
    gr.Markdown("# Large-Scale Knowledge Extraction Engine")
    gr.Markdown(
        "Enter a YouTube channel URL. The system downloads available subtitles "
        "and compresses them into 450k-word mega files for NotebookLM."
    )

    with gr.Row():
        with gr.Column(scale=2):
            url_input = gr.Textbox(
                label="Target YouTube Channel URL",
                placeholder="https://www.youtube.com/@ChannelName",
            )
            extract_btn = gr.Button("Initialize Extraction", variant="primary")

        with gr.Column(scale=1):
            status_output = gr.Textbox(label="System Status", interactive=False)
            file_output = gr.File(label="Download Compiled Mega Files", file_count="multiple")

    extract_btn.click(
        fn=extract_channel,
        inputs=url_input,
        outputs=[file_output, status_output],
    )


if __name__ == "__main__":
    app.launch(inbrowser=True)
