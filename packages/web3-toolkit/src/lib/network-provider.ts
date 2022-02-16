import { NetworkProviders, NetworkTypes, NetworkProvider } from '@tokensuite/types';
import { AlchemyProvider, JsonRpcProvider } from '@ethersproject/providers';


/**
 * Network Provider
 */
export class Provider {
  private static provider: {
    [key: string]: AlchemyProvider | JsonRpcProvider;
  } = {};

  /**
   * @param NetworkTypes - network
   *
   * @returns Network provider url
   */
  private static getProvider(network: NetworkTypes, networkProviders: NetworkProviders): NetworkProvider {
    switch (network) {
      case 'mainnet':
        return networkProviders.ethereum;
      case 'matic':
        return networkProviders.polygon;
      case 'binance':
        return networkProviders.binance;
      case 'rinkeby':
        return networkProviders.rinkeby;
      case 'maticmum':
        return networkProviders.mumbai;
      default:
        return networkProviders.ethereum;
    }
  }

  /**
   * Set Provider
   *
   * @param NetworkTypes - network
   */
  private static set(network: NetworkTypes, networProviders: NetworkProviders) {
    const provider = Provider.getProvider(network, networProviders);
    if (network === 'binance') {
      Provider.provider[network] = new JsonRpcProvider(provider.rpcUrl);
    } else {
      Provider.provider[network] = new AlchemyProvider(provider.network, provider.key);
    }
  }

  /**
   * Get Provider
   *
   * @param NetworkTypes - network
   *
   * @returns Json Rpc Provider
   */
  public static get(network: NetworkTypes, networkProviders: NetworkProviders): AlchemyProvider | JsonRpcProvider {
    if (!Provider.provider[network]) {
      Provider.set(network, networkProviders);
    }

    return Provider.provider[network];
  }
}
