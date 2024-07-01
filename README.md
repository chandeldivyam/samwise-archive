<p align="center">
  <a target="blank" href="https://github.com/thewh1teagle/vibe">
    <img
        width="96px"
        alt="Vibe logo"
        src="./design/logo.png"
    />
  </a>
</p>

<h1 align="center">Vibe - Transcribe on your own!</h1>

<p align="center">
  <strong>⌨️ Transcribe audio / video offline using OpenAI Whisper</strong>
  <br/>
</p>

<p align="center">
  <a target="_blank" href="https://thewh1teagle.github.io/vibe/">
    🔗 Download Vibe
  </a>
    &nbsp; | &nbsp; Give it a Star ⭐ | &nbsp;
    <a target="_blank" href="https://ko-fi.com/thewh1teagle">Support the project 🤝</a>
</p>

<hr />

## Screenshots

<p align="center">
	<a target="_blank" href="https://thewh1teagle.github.io/vibe/">
    	<img width=600 src="https://github.com/thewh1teagle/vibe/assets/61390950/22779ac6-9e49-4c21-b528-29647f039da2">
	</a>
</p>

# Features 🌟

-   🌍 Transcribe almost every language
-   🔒 Ultimate privacy: fully offline transcription, no data ever leaves your device
-   🎨 User friendly design
-   🎙️ Transcribe audio / video
-   📂 Batch transcribe multiple files!
-   📝 Support `SRT`, `VTT`, `TXT`, `HTML`, `PDF`, `JSON` formats
-   👀 Realtime preview
-   🌐 Translate to English from any language
-   🖨️ Print transcript directly to any printer
-   🔄 Automatic updates
-   🖥️ Optimized for `CPU` on (`Windows` / `Linux`)
-   💻 Optimized for `GPU` (`macOS`, `Windows`)
-   🎮 Optimized for `Nvidia` GPUs! (see [INSTALL.md#nvidia](https://github.com/thewh1teagle/vibe/blob/main/INSTALL.md#nvidia))
-   🔧 Total Freedom: Customize Models Easily via Settings
-   ⚙️ Model arguments for advanced users
-   ⏳ Transcribe system audio
-   🎤 Transcribe from microphone
-   🖥️ CLI support: Use Vibe directly from the command line interface! (see `--help`)
-   👥 ~Speaker diarization~ (coming soon)
-   📱 ~iOS & Android support~ (coming soon)
-   📥 Integrate custom models from your own site: Use `vibe://download/?url=<model url>`
-   📹 Choose caption length optimized for videos / reels
-   ⚡ HTTP API with Swagger docs! (use `--server` and open `http://<host>:3022/docs` for docs)

# Supported platforms 🖥️

`MacOS`
`Windows`
`Linux`

# Install notes

See [Install.md](INSTALL.md)

# Contribute 🤝

PRs are welcomed!
In addition, you're welcome to add translations.

We would like to express our sincere gratitude to all the contributors.

<a href="https://github.com/thewh1teagle/vibe/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=thewh1teagle/vibe" />
</a>

# Community

[![Discord](https://img.shields.io/badge/chat-discord-7289da.svg)](https://discord.gg/EcxWSstQN8)

# Roadmap 🛣️

You can see the roadmap in [Vibe-Roadmap](https://github.com/users/thewh1teagle/projects/5/views/1)

# Add translation 🌐

1. Copy `en` from `desktop/src-tauri/locales` folder to new directory eg `pt-BR` (use [bcp47 language code](https://gist.github.com/thewh1teagle/c8877e5c4c5e2780754ddd065ae2592e))
2. Change every value in the files there, to the new language and keep the keys as is
3. create PR / issue in Github

In addition you can add translation to [Vibe website](https://thewh1teagle.github.io/vibe/) by creating new files in the `landing/static/locales`.

# Build 🛠️

see [BUILDING.md](BUILDING.md)

# I want to know more!

Medium [post](https://medium.com/@thewh1teagle/creating-vibe-multilingual-audio-transcription-872ab6d9dbb0)

# Issue report

You can open [new issue](https://github.com/thewh1teagle/vibe/issues/new?assignees=octocat&labels=bug&projects=&template=bug_report.yaml&title=%5BBug%5D%3A+) and it's recommend to check [DEBUG.md](DEBUG.md) first.

# Credits

Thanks for [tauri.app](https://tauri.app/) for making the best apps framework I ever seen

Thanks for [wang-bin/avbuild](https://github.com/wang-bin/avbuild) for pre built `ffmpeg`

Thanks for [github.com/whisper.cpp](https://github.com/ggerganov/whisper.cpp) for outstanding interface for the AI model.

Thanks for [openai.com](https://openai.com/) for their amazing [Whisper model](https://openai.com/research/whisper)

Thanks for [github.com](https://github.com/) for their support in open source projects, providing infastructure completly free.

And for all the amazing open source frameworks and libraries which this project uses...
