import React from 'react';
import type { AppProps } from 'next/app';
import { MainWeb3ContextProvider } from '@tokensuite/web3-toolkit';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
const networkProviders = {
  /**
   * Ethereum Http Provider
   */
  ethereum: {
    /**
     * Ethereum Network Name
     */
    network: 'mainnet',

    /**
     * Ethereum Network Key
     */
    key: 'jNbFR-mvb-oRDIecIq1WieMmVdfrVSSX',

    chainId: 1,

    chainIdHex: '0x1',
    rpcUrl: '',
  },

  /**i
   * Polygon Http Provider
   */
  polygon: {
    /**
     * Polygon Network Name
     */
    network: 'matic',

    /**
     * Polygon Network Key
     */
    key: 'yNbLZ4QDoI08zpXBJ9ucC-vo2Otil_Mc',

    chainId: 137,

    chainIdHex: '0x89',

    rpcUrl: '',
  },
  binance: {
    chainId: 56,
    network: 'binance',
    chainIdHex: '0x38',
    key: '',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
  },
  rinkeby: {
    network: 'rinkeby',

    /**
     * Polygon Network Key
     */
    key: 'jNbFR-mvb-oRDIecIq1WieMmVdfrVSSX',

    chainId: 4,

    chainIdHex: '0x4',
    rpcUrl: '',
  },
  mumbai: {
    /**
     * Polygon Network Name
     */
    network: 'maticmum',

    /**
     * Polygon Network Key
     */
    key: 'yNbLZ4QDoI08zpXBJ9ucC-vo2Otil_Mc',

    chainId: 80001,

    chainIdHex: '0x13881',
    rpcUrl: '',
  },
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const getLibrary = (provider: any): ethers.providers.Web3Provider => new ethers.providers.Web3Provider(provider);
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MainWeb3ContextProvider networks={networkProviders}>
          <Component {...pageProps} />
        </MainWeb3ContextProvider>
      </Web3ReactProvider>
    </>
  );
}
export default MyApp;
