# 🧰 Client-Side Toolbox

A suite of developer and business utilities that run **entirely in your browser** — no server, no uploads, no data leaving your machine.

[![HTML](https://img.shields.io/badge/HTML-82%25-orange)](https://github.com/fzantalis/client-side-toolbox)
[![CSS](https://img.shields.io/badge/CSS-11%25-blue)](https://github.com/fzantalis/client-side-toolbox)
[![JavaScript](https://img.shields.io/badge/JavaScript-6%25-yellow)](https://github.com/fzantalis/client-side-toolbox)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Features

All tools share a common design principle: **your data never leaves your browser**. Everything is processed client-side using vanilla HTML, CSS, and JavaScript — no frameworks, no build step, no backend.

---

## 🛠️ Tools

| Tool | File | Description |
|------|------|-------------|
| **JSON Formatter** | `demo-json.html` | Beautify and validate JSON with syntax highlighting |
| **CSV → JSON** | `demo-csv-to-json.html` | Convert CSV files to JSON format instantly |
| **Text Diff** | `demo-diff.html` | Compare two blocks of text and highlight differences |
| **JWT Decoder** | `demo-jwt.html` | Decode and inspect JWT tokens without sending them anywhere |
| **Hash Generator** | `demo-hash.html` | Generate MD5, SHA-1, SHA-256, and other hashes from text or files |
| **Password Generator** | `demo-password.html` | Create strong, customizable passwords locally |
| **QR Code Generator** | `demo-qr.html` | Generate QR codes from any URL or text |
| **Base64 Image Encoder** | `demo-base64-image.html` | Convert images to Base64 strings (and back) |
| **Image → WebP Converter** | `demo-webp.html` | Convert images to the WebP format in-browser |
| **Color Extractor** | `demo-color-extractor.html` | Extract a color palette from any uploaded image |
| **SVG Editor/Viewer** | `demo-svg.html` | View, edit, and preview SVG files |
| **Markdown Previewer** | `demo-markdown.html` | Write Markdown and see a live rendered preview |
| **URL Encoder/Decoder** | `demo-url-encoder.html` | Encode and decode URL strings |
| **Smart Case Converter** | `demo-smart-case.html` | Convert text between camelCase, snake_case, kebab-case, and more |
| **Timezone Converter** | `demo-timezone.html` | Convert times across multiple timezones |
| **Hourly Wage Calculator** | `demo-hourly-wage.html` | Calculate annual/monthly salary from an hourly rate |
| **Invoice Generator** | `demo-invoice.html` | Create and print simple invoices without an account |

---

## 🚀 Getting Started

No installation required. Just open any HTML file directly in your browser:

```bash
git clone https://github.com/fzantalis/client-side-toolbox.git
cd client-side-toolbox
open index.html   # macOS
# or
start index.html  # Windows
# or just drag index.html into your browser
```

The `index.html` serves as a dashboard linking to all individual tools.

---

## 🔒 Privacy

All processing happens **locally in your browser**. No data is sent to any server. This makes the toolbox safe to use with sensitive information such as JWTs, hashed values, or private documents.

See [privacy.html](privacy.html) for the full privacy statement.

---

## 🗂️ Project Structure

```
client-side-toolbox/
├── index.html              # Main dashboard / tool launcher
├── style.css               # Shared styles
├── script.js               # Shared utilities (e.g. JSON beautifier)
├── theme-toggle.js         # Light/dark mode toggle
├── demo-*.html             # Individual tool pages
├── privacy.html            # Privacy policy
└── terms.html              # Terms of use
```

---

## 📄 License

This project is open source. See [terms.html](terms.html) for details.
