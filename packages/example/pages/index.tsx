import { InjectedConnector } from '@web3-react/injected-connector';
import { useNetworkProvider } from '@tokensuite/web3-toolkit';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import React from 'react';
const Home: React.FC = () => {
  const { activate, deactivate, account, library } = useWeb3React();
  const injected = new InjectedConnector({
    supportedChainIds: [1, 4, 137, 56, 80001],
  });
  /* const ctx = useMainWeb3Context();
  console.log(ctx.config); */
  const provider = useNetworkProvider('signer', library as Web3Provider);

  console.log(provider);

  return (
    <div>
      hello
      {account}
      <button onClick={() => activate(injected)}>connect</button>
    </div>
  );
};

export default Home;
