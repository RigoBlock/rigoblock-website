---
title:  "A Complete Infrastructure Stack"
subtitle: "02. How It Works"
slug: "project-02-protocol"
external_link: /faq
animation: true
---

Rigoblock is a complete infrastructure stack for both human and autonomous operators: on-chain vault contracts, a safe off-chain engine that simulates every transaction before settlement, and multiple interfaces from a web dashboard to an AI trading API.

Every trade passes through a two-layer safety stack: the **Swap Shield** compares the DEX quote against the vault's 5-minute BackGeoOracle TWAP and blocks fills that are >5% worse than oracle (bad fill) or >10% better (stale oracle/manipulated route); then the **NAV Shield** simulates the portfolio-level impact and blocks anything that would reduce vault NAV by more than 10%. Both layers run outside any operator's control surface and cannot be bypassed.

Vault operators assign scoped permissions to AI agents via Scoped Delegation. External AI agents connect through the X402 API for stateless, pay-per-call DeFi access.
