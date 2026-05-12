---
layout: page
title: FAQ
subtitle: "Frequently Asked Questions"
---

01. <span>What is RigoBlock?</span>
    >
    Rigoblock is an agent-native protocol for building onchain vault agents. It combines on-chain vault contracts, a safe off-chain validation engine, NAV Shield protection, and multiple operator interfaces — from a web dashboard to an AI-powered trading chat to an X402 API for autonomous agents. The protocol is deployed on 7 EVM chains and has been live since 2018.

02. <span>What is an onchain vault agent?</span>
    >
    An onchain vault agent is an autonomous AI entity that manages assets inside a Rigoblock smart vault. The agent uses the X402 API for stateless, pay-per-call DeFi access and operates under protocol-enforced safety rails — NAV Shield and Scoped Delegation — so it can trade and rebalance but can never drain the vault or bypass the protocol's guardrails.

03. <span>What is a smart vault?</span>
    >
    A smart vault is a non-custodial smart contract that holds and manages digital tokens on behalf of its operator and depositors. Anyone can deploy one permissionlessly. Vaults support swaps, liquidity provision (Uniswap V2/V3/V4), perpetuals (GMX V2), aggregated routing (0x), and bridging (Across) — all through whitelisted adapters governed by the RigoBlock DAO.

04. <span>What makes RigoBlock different?</span>
    >
    Rigoblock is purpose-built as agent-compatible vault infrastructure. Its unique combination of NAV Shield (protocol-enforced circuit breaker), off-chain transaction simulation, granular Scoped Delegation, and X402 micropayment API creates a safe non-custodial agent infrastructure — where AI agents can autonomously manage vaults without being able to drain funds. No other protocol offers this level of agent-native safety guarantees at the smart contract level.

05. <span>What is the Swap Shield?</span>
    >
    Swap Shield is oracle price protection — the first line of defense in Rigoblock's two-layer agent safety stack. Before building any swap calldata, the system compares the DEX quote against the vault’s on-chain BackGeoOracle 5-minute TWAP price (via <code>vault.convertTokenAmount</code>). A trade is blocked if the DEX quote is more than 5% worse than the oracle price (bad fill from poor liquidity or stale DEX state), or more than 10% better (stale oracle or manipulated route). When no oracle price feed exists for a token, Swap Shield gracefully allows the swap only for selling non-tracked tokens such as airdrops or direct transfers — no false blocks for legitimate edge cases. Swap Shield is completely separate from slippage protection; it operates at the oracle-price level before the NAV Shield’s portfolio-impact check runs.

06. <span>What is NAV Shield?</span>
    >
    NAV Shield is a deterministic protocol-level firewall built into every Rigoblock vault. Before every trade, the transaction's impact on the vault's Net Asset Value is simulated off-chain. If NAV would drop more than 10% versus the pre-swap level or 24-hour baseline, the transaction is blocked. NAV Shield runs outside the agent's control surface — no agent, autonomous strategy, or API caller can disable or circumvent it. It is the industry's first protocol-level circuit breaker for onchain vault agents.

07. <span>What is the X402 API?</span>
    >
    The X402 API at <a href="https://trader.rigoblock.com" target="_blank">trader.rigoblock.com</a> enables external AI agents to access DeFi trading via the HTTP 402 / X402 micropayment standard. Agents pay per call in USDC on Base — no subscriptions, no API keys, no custody. The service is registered in Coinbase's x402 Bazaar for automatic agent discovery.

08. <span>What is Scoped Delegation for AI agents?</span>
    >
    Scoped Delegation lets vault operators assign <strong>Trader</strong> rights to an AI agent on a per-chain, per-function-selector basis. The agent can swap, provide liquidity, or bridge assets within whitelisted protocols — but is cryptographically barred from withdrawing funds, changing vault ownership, or altering delegation settings. Delegation is fully revocable at any time, giving operators complete control over their autonomous strategies.

09. <span>How do autonomous execution modes work?</span>
    >
    Rigoblock supports two modes. In <strong>Manual</strong> mode, the agent prepares the transaction and the operator signs it with their own wallet. In <strong>Delegated</strong> mode, the vault grants temporary encrypted keys to the agent for fully autonomous, revocable settlement. Both modes go through NAV Shield and the full 7-point validation pipeline before any transaction is broadcast.

10. <span>How does Rigoblock prevent rogue agent behavior?</span>
    >
    Through three protocol-level layers that operate entirely outside the agent's control surface. First, <strong>Swap Shield</strong> compares every DEX quote against the vault’s 5-minute BackGeoOracle TWAP and blocks trades that are more than 5% worse than oracle (bad fill) or more than 10% better (stale/manipulated) — catching bad quotes before they reach the portfolio-impact check. Second, <strong>NAV Shield</strong> simulates the overall portfolio impact and blocks any trade that would reduce vault NAV by more than 10%. Third, <strong>Scoped Delegation</strong> restricts which functions an agent may call at all. Even a compromised agent key or a jailbroken AI model cannot bypass any of these layers.

11. <span>Can AI agents operate vaults autonomously?</span>
    >
    Yes, with protocol-level safeguards. Vault operators delegate scoped, per-chain, per-function permissions to an agent wallet. The agent can execute pre-approved actions but cannot withdraw funds, transfer ownership, change delegation settings, or bypass NAV Shield. Delegation is revocable at any time.

12. <span>Which chains does RigoBlock support?</span>
    >
    The protocol is deployed on Ethereum, Arbitrum, Base, Optimism, BSC, Unichain, and Polygon — 7 EVM-compatible chains. The X402 trading API supports agent operations across all deployed chains.

13. <span>What DeFi integrations are available?</span>
    >
    Uniswap V2, V3, and V4 (swaps and liquidity), 0x Aggregator (best-execution routing), GMX V2 (perpetuals), Across (cross-chain bridging), and BackGeoOracle (on-chain price feeds with over 70,000 price updates).

14. <span>What are GRG tokens?</span>
    >
    GRG is the ERC-20 governance and incentive token of the RigoBlock network. It powers the Proof-of-Performance reward system — vault operators earn GRG for generating real returns — and represents voting power in fully on-chain governance when staked.

15. <span>How does Proof-of-Performance work?</span>
    >
    Proof-of-Performance is an on-chain algorithm that replaces management and performance fees. Vault operators — human or AI — earn GRG rewards proportional to their vault's value and returns. To qualify, operators must stake a minimum amount of GRG — aligning operator success directly with depositor outcomes.

16. <span>Who is building RigoBlock?</span>
    >
    Rigo Investment Sagl, a Swiss company, builds and maintains the protocol. RigoBlock is validated by the Uniswap Foundation (UFSF Cohort 2 and Retro Grant recipient) and is an H-Farm Blockchain Business Solution alumnus. The codebase is open source under the Apache 2.0 License at <a href="https://github.com/RigoBlock" target="_blank">github.com/RigoBlock</a>.

17. <span>How do I get started?</span>
    >
    Deploy an agent-compatible vault at <a href="https://app.rigoblock.com" target="_blank">app.rigoblock.com</a>, try AI-powered trading at <a href="https://trader.rigoblock.com" target="_blank">trader.rigoblock.com</a>, or explore the developer documentation at <a href="https://docs.rigoblock.com" target="_blank">docs.rigoblock.com</a>.
{:.faq-list}
