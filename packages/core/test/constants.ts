import type { Hex } from '../src/types'

export const accounts = [
  {
    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    balance: 10000000000000000000000n,
  },
  {
    address: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    balance: 10000000000000000000000n,
  },
  {
    address: '0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc',
    balance: 10000000000000000000000n,
  },
  {
    address: '0x90f79bf6eb2c4f870365e785982e1f101e93b906',
    balance: 10000000000000000000000n,
  },
  {
    address: '0x15d34aaf54267db7d7c367839aaf71a00a2c6a65',
    balance: 10000000000000000000000n,
  },
  {
    address: '0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc',
    balance: 10000000000000000000000n,
  },
  {
    address: '0x976ea74026e726554db657fa54763abd0c3a0aa9',
    balance: 10000000000000000000000n,
  },
  {
    address: '0x14dc79964da2c08b23698b3d3cc7ca32193d9955',
    balance: 10000000000000000000000n,
  },
  {
    address: '0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f',
    balance: 10000000000000000000000n,
  },
  {
    address: '0xa0ee7a142d267c1f36714e4a8f75612f20a79720',
    balance: 10000000000000000000000n,
  },
] as const

export const initialBlockNumber = BigInt(
  Number(process.env.VITE_ANVIL_BLOCK_NUMBER),
)

export const localWsUrl = 'ws://127.0.0.1:8545'

// ERC20 `transferFrom` method
export const transfer1Data = (address: string): Hex =>
  `0xa9059cbb000000000000000000000000${address
    .slice(2)
    .toLowerCase()}0000000000000000000000000000000000000000000000000000000000000001`

// vitalik.eth
export const vitalikAddress = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'

// USDC ERC20 contract
export const usdcAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'