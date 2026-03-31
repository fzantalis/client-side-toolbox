# 🧰 Client-Side Toolbox
A suite of developer and business utilities that run **entirely in your browser** — no server, no uploads, no data leaving your machine.

[![HTML](https://img.shields.io/badge/HTML-96.1%25-orange)](https://github.com/fzantalis/client-side-toolbox)
[![CSS](https://img.shields.io/badge/CSS-2.6%25-blue)](https://github.com/fzantalis/client-side-toolbox)
[![JavaScript](https://img.shields.io/badge/JavaScript-1.3%25-yellow)](https://github.com/fzantalis/client-side-toolbox)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Features

All tools share a common design principle: **your data never leaves your browser**. Everything is processed client-side using vanilla HTML, CSS, and JavaScript — no frameworks, no build step, no backend.

- **100% Private:** Zero server uploads.
- **Blazing Fast:** Instant local processing.
- **Offline Ready:** Works without an internet connection once loaded.

---

## 🛠️ Tools

### 📝 Text & Data
| Tool | File | Description |
|------|------|-------------|
| **JSON Beautifier** | `demo-json.html` | Format, validate, and minify JSON data with syntax highlighting. |
| **CSV Converter** | `demo-csv-to-json.html` | Transform raw CSV data into clean JSON or SQL insert statements. |
| **CSV Explorer** | `demo-csv-explorer.html` | Load, sort, filter, and explore large CSV files directly in the browser. |
| **Smart Case Converter** | `demo-smart-case.html` | Switch between camelCase, snake_case, PascalCase, and more. |
| **Markdown Editor** | `demo-markdown.html` | Real-time Markdown rendering and HTML export. |
| **Text Diff Checker** | `demo-diff.html` | Compare two blocks of text or code to find exact line changes. |
| **Mock Data Generator** | `demo-mock-data.html` | Generate thousands of realistic JSON/CSV records using Faker.js. |
| **PDF Utility** | `demo-pdf.html` | Inspect, add blank pages, or securely extract pages locally. |

### 🎨 Design & Media
| Tool | File | Description |
|------|------|-------------|
| **WebP Converter** | `demo-webp.html` | Compress images to next-gen WebP format without losing quality. |
| **Video Converter** | `demo-video-converter.html` | Convert/compress video files using FFmpeg Wasm — no uploads needed. |
| **Color Extractor** | `demo-color-extractor.html` | Extract dominant color palettes and hex codes from any image. |
| **EXIF Viewer** | `demo-exif.html` | Inspect hidden photo metadata (camera, GPS, exposure, etc.). |
| **QR Code Generator** | `demo-qr.html` | Instantly generate customizable, tracking-free QR codes. |
| **SVG Optimizer** | `demo-svg.html` | Clean and minify messy SVG code exports to save space. |
| **Auto Face Blur** | `demo-anonymizer.html` | Automatically detect and blur faces in images using on-device AI. |

### 💼 Business & Finance
| Tool | File | Description |
|------|------|-------------|
| **Hourly Wage Calculator** | `demo-hourly-wage.html` | Calculate effective hourly rates after software costs and taxes. |
| **Invoice Generator** | `demo-invoice.html` | Generate and download professional PDF invoices directly. |
| **Currency Converter** | `demo-currency.html` | Offline conversion using baseline fixed rates. Quick and private. |
| **Tip Calculator** | `demo-tip.html` | Calculate gratuity and perfectly split bills among friends. |

### 📐 Math & Utilities
| Tool | File | Description |
|------|------|-------------|
| **Standard Calculator** | `demo-calculator.html` | A fast, offline-ready standard calculator for quick math. |
| **Unit Converter** | `demo-unit-converter.html` | Instantly convert length, weight, and temperature offline. |
| **Stopwatch & Timer** | `demo-stopwatch.html` | Millisecond precision stopwatch with integrated lap tracking. |
| **Timezone Overlap** | `demo-timezone.html` | Find overlapping meeting times across global timezones. |
| **P2P File Transfer** | `demo-p2p.html` | Send files peer-to-peer over an encrypted WebRTC connection. |

### 🔒 Security & Encoding
| Tool | File | Description |
|------|------|-------------|
| **URL Encoder/Decoder** | `demo-url-encoder.html` | Safely encode/decode URLs for data transfer. |
| **Password Generator** | `demo-password.html` | Generate highly secure, localized passwords instantly. |
| **Base64 Image Encoder** | `demo-base64-image.html` | Encode images into Base64 data strings for inline CSS/HTML. |
| **JWT Builder & Decoder** | `demo-jwt-builder.html` | Craft, sign, and decode JSON Web Tokens securely. |
| **Certificate Viewer** | `demo-cert-viewer.html` | Inspect X.509 certificates (.pem, .crt) securely. |
| **File Hash Checker** | `demo-hash.html` | Verify file integrity by calculating SHA-256 checksums. |
| **Zero-Trust AI Sanitizer** | `demo-prompt-sanitizer.html` | Redact API keys and PII from code before pasting into LLMs. |

### 💻 Developer
| Tool | File | Description |
|------|------|-------------|
| **Regex Tester** | `demo-regex.html` | Live match highlighting, capture group inspector, and cheat sheet. |
| **Cron Expression Builder** | `demo-cron.html` | Build/validate cron schedules with plain-English descriptions. |
| **ERD Builder** | `demo-erd.html` | Design entity-relationship diagrams visually; export as SQL/Image. |
| **Subnet Calculator** | `demo-subnet-calc.html` | Instantly calculate CIDR network addresses, masks, and ranges. |
| **Open Graph Generator** | `demo-og-generator.html` | Preview social share cards and generate HTML meta tags. |

---

## 🚀 Getting Started

No installation required. Just open `index.html` in any modern browser to access the dashboard.

```bash
git clone [https://github.com/fzantalis/client-side-toolbox.git](https://github.com/fzantalis/client-side-toolbox.git)
cd client-side-toolbox
# Open index.html in your preferred browser
