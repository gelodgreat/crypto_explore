import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { UseWalletProvider } from 'use-wallet';

const getLibrary = (provider: any) => {
  return new Web3(provider);
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UseWalletProvider
      chainId={97}
      connectors={{
        // This is how connectors get configured
        portis: { dAppId: 'my-test-id-12928-xwxyz' },
      }}
    >
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </UseWalletProvider>
  );
}

export default MyApp;
