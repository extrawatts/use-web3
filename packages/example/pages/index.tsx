import React from 'react';
import { logMyShit } from '@tokensuite/web3-toolkit';

const Home: React.FC = () => (
  <div>
    hello
    <button onClick={logMyShit}>click to log</button>
  </div>
);

export default Home;
