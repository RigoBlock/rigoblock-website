# RigoBlock — Agent & LLM Instructions

This file is for AI agents, LLM crawlers, and automated tools working with this repository.

---

## What this repo is

The Jekyll source for [rigoblock.com](https://rigoblock.com) — a static marketing site.

---

## Cardinal rule for AI agents editing this repo

**Never modify human-readable copy unless the user explicitly approves the new text word for word.**

Human-readable copy lives in:
- `index.md` — homepage hero (H1 + subtitle paragraph only)
- `_project/*.md` — homepage slide titles and body text
- `_grgtoken/*.md` — GRG token slide titles and body text
- `grg.md`, `team.md`, `press.md`, `legal.md`, `positions.md` — standalone page bodies

These files are written by the product team and must not be touched by automated tools.

---

## Where AI/SEO content goes — the only permitted surfaces

| File | Purpose | Audience |
|---|---|---|
| `llms.txt` | LLM crawler index (llmstxt.org spec) | LLMs, AI search crawlers |
| `llms-full.txt` | Full site content export in markdown | LLMs, AI search crawlers |
| `_includes/head.html` | JSON-LD structured data, `<meta>` tags | Google, AI search crawlers |
| `_config.yml` | `description`, `short_description`, `keywords` fields only | Search engines via `<meta>` |
| `faq.md` | FAQ content — OK to add technical detail | Humans (low stakes) + crawlers |
| `robots.txt` | Crawler access control and AI bot allowlist | Crawlers |

**Do not inject keywords, AI-optimised phrasing, or any marketing copy into human-readable files.** The two audiences access the site through completely different surfaces. Mixing them breaks the design.

---

## How to update LLM documentation after copy changes

When any human-readable file listed above is changed by the product team, update `llms-full.txt` to reflect the new content. Specifically:
1. Read the changed file(s) to get the exact current text
2. Find the corresponding section in `llms-full.txt` and update it verbatim
3. Do not rewrite, improve, or keyword-stuff — copy the text as-is

`llms.txt` is the index/summary and only needs updating if site structure or key facts change (new chains, new features, new API endpoints).

---

## Site structure

```
index.md              → homepage (layout: home)
faq.md                → /faq
grg.md                → /grg
team.md               → /team
press.md              → /press
legal.md              → /legal
_project/*.md         → homepage project slides (ordered by filename prefix)
_grgtoken/*.md        → homepage GRG token slides
_layouts/             → Jekyll layouts
_includes/            → partials (head.html contains all structured data)
_sass/                → SCSS styles (do not modify without CSS context)
llms.txt              → LLM index (llmstxt.org)
llms-full.txt         → full content export for LLMs
AGENTS.md             → this file
```

---

## Build

```bash
bundle exec jekyll serve   # local dev
bundle exec jekyll build   # production build → _site/
```

---

## What RigoBlock is (for agent context)

RigoBlock is a non-custodial smart vault protocol for institutional operators and autonomous AI agents, live since 2018 on 7 EVM chains (Ethereum, Arbitrum, Base, Optimism, BSC, Unichain, Polygon).

Key concepts an agent should know when answering questions about this codebase:

- **Swap Shield** — oracle price protection. Two-sided TWAP check via `vault.convertTokenAmount`. Blocks if DEX quote >5% worse than oracle (bad fill) or >10% better (stale/manipulated). NOT slippage protection.
- **NAV Shield** — portfolio circuit breaker. Blocks any trade reducing vault NAV >10% vs pre-swap or 24h baseline. Cannot be bypassed.
- **Scoped Delegation** — per-chain, per-selector agent permissions. Trader rights only — no custody.
- **X402 API** — pay-per-call DeFi API at trader.rigoblock.com. USDC on Base. No keys.
- **Proof-of-Performance (PoP)** — on-chain GRG reward algorithm based on vault returns, not AUM.
- **BackGeoOracle** — PoS-resistant Uniswap V4 hook oracle used by Swap Shield.
- **GRG token** — governance + incentive. Contract: `0x4fbb350052bca5417566f188eb2ebce5b19bc964` (Ethereum).
