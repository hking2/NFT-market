import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { ChakraProvider } from '@chakra-ui/react';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';
import theme from './lib/theme';
import Footer from './components/Footer';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygonMumbai, chain.goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_POLYGON }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'NFT Market dApp',
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({ ...darkTheme.accentColors.purple })}
        >
          <Component {...pageProps} />
          <Footer />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default App;
