import React from 'react';
import { NetworkProviders, Web3ContextProviderProps, UseWeb3ContextReturnType } from '@tokensuite/types';

const web3Context = React.createContext<UseWeb3ContextReturnType | null>(null);

const { Provider } = web3Context;

export const MainWeb3ContextProvider: React.FC<Web3ContextProviderProps> = ({ children, networks }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const web3Context = useMainWeb3ContextProvider(networks);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return <Provider value={web3Context}>{children}</Provider>;
};

export const useMainWeb3Context = (): {
  config: { networks: NetworkProviders };
} | null => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return React.useContext(web3Context);
};

const useMainWeb3ContextProvider = (networks: NetworkProviders): UseWeb3ContextReturnType | null => {
  return {
    config: {
      networks,
    },
  };
};
