# RigoBlock X402 Trading API

This skill teaches AI agents how to use the RigoBlock X402 micropayment API to access DeFi trading for non-custodial onchain smart vaults.

## What this skill enables

- Get price quotes for token swaps across 7 EVM chains
- Execute DeFi trades via X402 micropayment (USDC on Base, no API keys)
- Interact with non-custodial smart vaults protected by Swap Shield and NAV Shield

## API Endpoint

https://trader.rigoblock.com

## Authentication

X402 micropayment protocol (HTTP 402). Pay per call in USDC on Base (eip155:8453).
Cost: $0.002–$0.01 per call. No subscriptions, no API keys, no custody.

## Discovery

Registered in Coinbase x402 Bazaar:
https://api.cdp.coinbase.com/platform/v2/x402/discovery/resources

## Endpoints

### GET /api/quote
Get a price quote for a token swap.
Query parameters: tokenIn, tokenOut, amountIn, chainId

### POST /api/chat
Natural language DeFi trading interface.
Body: `{ "message": "<natural language instruction>", "vaultAddress": "<0x...>" }`

## Supported Chains

| Chain     | Chain ID |
|-----------|----------|
| Ethereum  | 1        |
| Arbitrum  | 42161    |
| Base      | 8453     |
| Optimism  | 10       |
| BSC       | 56       |
| Unichain  | 130      |
| Polygon   | 137      |

## Safety Guarantees

All trades are protected by two protocol-level layers that cannot be bypassed:

- **Swap Shield**: compares DEX quote against vault's 5-minute BackGeoOracle TWAP via `vault.convertTokenAmount(tokenIn, amountIn, tokenOut)`. Blocks if quote is >5% worse than oracle (bad fill) or >10% better (stale/manipulated).
- **NAV Shield**: simulates portfolio NAV impact before every trade. Blocks if vault NAV would drop >10% vs pre-swap or 24h baseline.

## DeFi Integrations Available

- Uniswap V2, V3, V4 (swaps and liquidity provision)
- 0x Aggregator (best-execution routing)
- GMX V2 (perpetuals)
- Across (cross-chain bridging)

## More Information

- Protocol overview: https://rigoblock.com/llms-full.txt
- Developer docs: https://docs.rigoblock.com/ai-agents
- LLM index: https://rigoblock.com/llms.txt
