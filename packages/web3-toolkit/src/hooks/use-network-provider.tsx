import { useMemo } from 'react';
import { AlchemyProvider, Web3Provider, JsonRpcSigner, JsonRpcProvider } from '@ethersproject/providers';
import { NetworkTypes } from '@tokensuite/types';
import { Provider } from '../lib/network-provider';
import { useMainWeb3Context } from '../providers/main-web3-provider';
export const useNetworkProvider = (
  network: NetworkTypes,
  library?: Web3Provider | undefined
): AlchemyProvider | Web3Provider | JsonRpcSigner | JsonRpcProvider | null => {
  const web3Context = useMainWeb3Context();

  return useMemo((): AlchemyProvider | Web3Provider | JsonRpcSigner | JsonRpcProvider | null => {
    if (!web3Context) return null;
    const provider: AlchemyProvider | JsonRpcProvider = Provider.get(network, web3Context.config.networks);

    if (library && network === 'signer') {
      return library.getSigner();
    } else {
      return provider;
    }
  }, [library, network, web3Context]);
};
