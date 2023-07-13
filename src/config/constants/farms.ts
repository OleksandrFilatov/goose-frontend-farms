import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'EGG-BNB LP',
    lpAddresses: {
      97: '',
      // 56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      // 56: '0x70E8822A7E21E51d05DE9432CC4c081da75259dd',
      56: '0xF17c8AD4003aDfa3eB1e4Ec87F5a80eDAd90749b',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      // 56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      // 56: '0x2CC035C61D5d935d7B3e53E09DAFb5E4eb47a221',
      56: '0x67618284c34c4bf5D67F32957A6d7499C1724cB3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'EGG-BUSD LP',
    lpAddresses: {
      97: '',
      // 56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      56: '0xFAfec31E6be58407220D174C57A5f0778988c398',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      // 56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      56: '0x67618284c34c4bf5D67F32957A6d7499C1724cB3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
