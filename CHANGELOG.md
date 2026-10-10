# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.4.0] - Stage 4 (installable mobile app)

### Added
- Progressive Web App: `manifest.webmanifest`, icons (incl. maskable), `sw.js` service worker (network-first, offline fallback; never intercepts OpenAlex/Crossref/Ollama requests).
- "Install app" button (shown only when the browser offers installation).
- Mobile CSS: scrollable nav, 44px touch targets, 16px inputs, scrollable tables, safe-area padding.
- Clear message on phones that local Ollama is PC-only; offline guard for web search.
- Android wrapper (Capacitor 6) config + manual GitHub Actions workflow to build a debug APK (untested on GitHub).
- Arabic guides: publishing guide (admin) and phone guide (colleagues).

## [3.3.0] - Stage 3 (thesis path, import, real Word export)

### Added
- New tab **"🧭 مسار الرسالة"**: problem, objectives, questions, hypotheses, theory, method, population, sample, instrument, statistics, results, recommendations. One button drafts the empty fields from the title/variables (placeholders in [ ] mark what only the researcher can supply). Results and recommendations are never auto-drafted.
- Sample-size calculator (Cochran with finite-population correction).
- Consistency checker: missing sections, unreplaced [ ], mediator without mediation analysis, qualitative method vs quantitative analysis, "effect" vs "relationship" wording, sample below minimum, instrument without validity/reliability.
- **Real .docx export** (RTL Arabic, headings, tables) built in the browser without libraries.
- Import of BibTeX / RIS (references), and txt / md / csv / docx (DOI extraction, metadata fetched from Crossref). PDF is not supported.
- Simplified navigation: 6 main tabs, the rest under "المزيد".

### Fixed
- DOIs followed by Arabic punctuation were captured with the punctuation.

## [3.2.0] - Stage 2 (title-first start screen)

### Added
- New default tab **"🏠 البداية"**: a single field for the thesis title.
- Rule-based title analysis (Arabic + English patterns: effect / role / relationship, mediator, setting) that fills the project profile; user can correct every field.
- Academic notes on the title (length, causal wording, missing setting) and four alternative titles, each with a justification.
- Small built-in table of well-known constructs with their foundational source and commonly reported dimensions (to be verified against the original source).
- One-click search of real studies in OpenAlex using auto-suggested English keywords.
- "Suggest research gap" using the local model, based only on the studies the user added; references to non-existent study numbers are flagged automatically.

## [3.1.0] - Stage 1 (local-first, free)

### Changed
- Text generation now uses a **local Ollama model** (`/api/chat`) instead of a paid OpenAI-compatible API. No API key, no subscription.
- Any API key saved by the previous version in the browser (`td-api`) is deleted automatically.
- Removed dependency on Google Fonts (system fonts only) and the placeholder `@example.com` e-mail in OpenAlex requests.
- Clear Arabic error messages for: Ollama not running, model not installed, timeout.

### Added
- "Test connection" button (lists installed local models).
- Launcher scripts for Windows and Mac/Linux that start Ollama with the needed browser permission.

## [Unreleased]

### Added
- Community-health files: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, issue/PR templates.
- Continuous integration workflow to sanity-check the source.
- Repository topics and project documentation for discoverability.

## [3.0.0]

### Added
- 🤖 **Auto Generator**: automated search in the OpenAlex index, retraction/DOI filtering,
  automatic insertion of studies and APA references, and automatic verification.
- Ready-to-export literature-review report and full dissertation skeleton (Word / Markdown).
- Optional academic text generation via an OpenAI-compatible API key.
- 11 tabs covering the full dissertation lifecycle, from project profile to questionnaire.
- Offline-first storage (all data kept in the browser under `thesis-desk-v2`).
- Full Arabic user guide and a self-contained single-file build.

[Unreleased]: https://github.com/ahmedawe2026-svg/DBA-Research-Dissertation-Assistant/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/ahmedawe2026-svg/DBA-Research-Dissertation-Assistant/releases/tag/v3.0.0