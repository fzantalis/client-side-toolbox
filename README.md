# The Client-Side Toolbox

A suite of powerful developer and business utilities that run entirely in your browser. All processing happens locally — no data is ever sent to a server.

## Features

- **100% Private** — zero server uploads, all processing is local
- **Blazing Fast** — instant results with no round-trips
- **Offline Ready** — works without an internet connection after first load

## Tools

### Text & Data
| Tool | File | Description |
|------|------|-------------|
| JSON Beautifier | `demo-json.html` | Format, validate, and minify JSON data |
| CSV Converter | `demo-csv-to-json.html` | Convert CSV to JSON or SQL insert statements |
| CSV Explorer | `demo-csv-explorer.html` | Load, sort, filter, and explore large CSV files |
| Smart Case Converter | `demo-smart-case.html` | Switch between camelCase, snake_case, PascalCase, and more |
| Markdown Editor | `demo-markdown.html` | Real-time Markdown rendering and HTML export |
| Text Diff Checker | `demo-diff.html` | Compare two text blocks to find exact line changes |

### Design & Media
| Tool | File | Description |
|------|------|-------------|
| WebP Converter | `demo-webp.html` | Compress bulk images to next-gen WebP format |
| Video Converter | `demo-video-converter.html` | Convert and compress video files entirely in the browser |
| Color Extractor | `demo-color-extractor.html` | Extract dominant color palettes from images |
| EXIF Viewer | `demo-exif.html` | Inspect hidden photo metadata — camera, GPS, exposure |
| QR Code Generator | `demo-qr.html` | Generate tracking-free QR codes for links and text |
| SVG Optimizer | `demo-svg.html` | Clean and minify SVG code exports |

### Business & Productivity
| Tool | File | Description |
|------|------|-------------|
| Hourly Wage Calculator | `demo-hourly-wage.html` | Calculate effective hourly rate after costs and taxes |
| Invoice Generator | `demo-invoice.html` | Generate and download professional PDF invoices |
| Timezone Overlap | `demo-timezone.html` | Find overlapping meeting times across global timezones |
| P2P File Transfer | `demo-p2p.html` | Send files directly to another browser over an encrypted peer-to-peer connection |

### Security & Encoding
| Tool | File | Description |
|------|------|-------------|
| URL Encoder/Decoder | `demo-url-encoder.html` | Encode or decode URL-safe strings |
| Password Generator | `demo-password.html` | Generate highly secure passwords locally |
| Base64 Image Encoder | `demo-base64-image.html` | Encode images to Base64 for inline HTML/CSS use |
| JWT Builder & Decoder | `demo-jwt-builder.html` | Craft, sign, and decode JSON Web Tokens in the browser |
| File Hash Checker | `demo-hash.html` | Verify file integrity with SHA-256 checksums |

### Developer
| Tool | File | Description |
|------|------|-------------|
| Regex Tester | `demo-regex.html` | Live match highlighting, capture group inspector, and cheat sheet |
| Cron Expression Builder | `demo-cron.html` | Build and validate cron schedules with plain-English descriptions |
| ERD Builder | `demo-erd.html` | Design entity-relationship diagrams and export as SQL or image |

## How to Run

Open `index.html` directly in any modern browser — no build step or server required.

## Project Structure

```
client-side-toolbox/
├── index.html          # Main dashboard / tool directory
├── style.css           # Shared stylesheet
├── script.js           # Shared utilities (e.g. jsonBeautify)
├── theme-toggle.js     # Light/dark theme switcher
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
└── demo-*.html         # Individual tool pages (24 tools)
```

## Contributing

1. Fork the repository
2. Add your tool as a `demo-<toolname>.html` file following the existing patterns
3. Add a card entry to `index.html` in the appropriate section
4. Update this README with a row in the matching table
5. Open a pull request

## About

Built to keep sensitive data — passwords, tokens, files, images — out of third-party servers. Every tool runs entirely client-side using standard Web APIs.
