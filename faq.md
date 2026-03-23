---
layout: page
title: FAQ
subtitle: "Frequently Asked Questions"
---

01. <span>What is RigoBlock?</span>
    >
    RigoBlock is secure smart vault infrastructure for DeFi and autonomous agents. It combines on-chain vault contracts, a safe off-chain execution engine, and multiple operator interfaces — from a web dashboard to an AI-powered trading chat to an X402 API for external agents. Live since 2018, the protocol is deployed on 7 EVM chains.

02. <span>What is a smart vault?</span>
    >
    A smart vault is a non-custodial smart contract that holds and manages digital tokens on behalf of its operator and depositors. Anyone can deploy one permissionlessly. Vaults support swaps, liquidity provision (Uniswap V2/V3/V4), perpetuals (GMX V2), aggregated routing (0x), and bridging (Across) — all through whitelisted adapters governed by the RigoBlock DAO.

03. <span>What makes RigoBlock different?</span>
    >
    RigoBlock is purpose-built for autonomous execution. Its unique combination of NAV Shield (protocol-enforced circuit breaker), off-chain transaction simulation, granular delegation, and X402 micropayment API creates a safe execution layer — where AI agents can operate vaults without being able to drain funds. No other protocol offers this level of agent-native safety guarantees.

04. <span>What is NAV Shield?</span>
    >
    NAV Shield is a protocol-enforced protection mechanism. Before every trade, the swap's impact on the vault's Net Asset Value is simulated off-chain. If NAV would drop more than 10% versus the pre-swap level or 24-hour baseline, the transaction is blocked. NAV Shield runs outside the agent's control surface — no agent or API caller can disable or circumvent it.

05. <span>What is the X402 API?</span>
    >
    The X402 API at <a href="https://trader.rigoblock.com" target="_blank">trader.rigoblock.com</a> enables external AI agents to access DeFi trading via the HTTP 402 / X402 micropayment standard. Agents pay per call in USDC on Base — no subscriptions, no API keys, no custody. The service is registered in Coinbase's x402 Bazaar for automatic agent discovery.

06. <span>How do execution modes work?</span>
    >
    RigoBlock supports two execution modes. In <strong>Manual</strong> mode, the agent prepares the transaction and the operator signs it with their own wallet. In <strong>Delegated</strong> mode, the vault grants temporary encrypted keys to the agent for fully autonomous, revocable execution. Both modes go through NAV Shield and the full 7-point validation pipeline before any transaction is broadcast.

07. <span>Can AI agents operate vaults autonomously?</span>
    >
    Yes, with protocol-level safeguards. Vault operators delegate scoped, per-chain, per-function permissions to an agent wallet. The agent can execute pre-approved actions but cannot withdraw funds, transfer ownership, change delegation settings, or bypass NAV Shield. Delegation is revocable at any time.

08. <span>Which chains does RigoBlock support?</span>
    >
    The protocol is deployed on Ethereum, Arbitrum, Base, Optimism, BSC, Unichain, and Polygon. The X402 trading API supports execution across all deployed chains.

09. <span>What DeFi integrations are available?</span>
    >
    Uniswap V2, V3, and V4 (swaps and liquidity), 0x Aggregator (best-execution routing), GMX V2 (perpetuals), Across (cross-chain bridging), and BackGeoOracle (on-chain price feeds with over 70,000 price updates).

10. <span>What are GRG tokens?</span>
    >
    GRG is the ERC-20 governance and incentive token of the RigoBlock network. It powers the Proof-of-Performance reward system — vault operators earn GRG for generating real returns — and represents voting power in fully on-chain governance when staked.

11. <span>How does Proof-of-Performance work?</span>
    >
    Proof-of-Performance is an on-chain algorithm that replaces management and performance fees. Vault operators earn GRG rewards proportional to their vault's value and returns. To qualify, operators must stake a minimum amount of GRG — aligning operator success directly with depositor outcomes.

12. <span>Who is building RigoBlock?</span>
    >
    Rigo Investment Sagl, a Swiss company, builds and maintains the protocol. RigoBlock is validated by the Uniswap Foundation (UFSF Cohort 2 and Retro Grant recipient) and is an H-Farm Blockchain Business Solution alumnus. The codebase is open source under the Apache 2.0 License at <a href="https://github.com/RigoBlock" target="_blank">github.com/RigoBlock</a>.

13. <span>How do I get started?</span>
    >
    Deploy a vault at <a href="https://app.rigoblock.com" target="_blank">app.rigoblock.com</a>, try AI-powered trading at <a href="https://trader.rigoblock.com" target="_blank">trader.rigoblock.com</a>, or explore the developer documentation at <a href="https://docs.rigoblock.com" target="_blank">docs.rigoblock.com</a>.
{:.faq-list}
