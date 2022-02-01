import { NetworkProviders } from '../../config';

export interface Web3ContextProviderProps {
  networks: NetworkProviders;
}

export interface UseWeb3ContextReturnType {
  config: {
    networks: NetworkProviders;
  }
}
