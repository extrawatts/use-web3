import { useMainWeb3Context } from '@tokensuite/web3-toolkit';
import React from 'react';
const Home: React.FC = () => {
  const ctx = useMainWeb3Context();
  console.log(ctx.config);

  return (
    <div>
      hello
      <button>click to log</button>
    </div>
  );
};

export default Home;
