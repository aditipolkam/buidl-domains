import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PrivyProvider } from "@privy-io/react-auth";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PRIVY_APP_ID, SERVER_ENDPOINT } from "./utils/constants.ts";
import { BrowserRouter } from "react-router-dom";
import { SmartWalletsProvider } from "@privy-io/react-auth/smart-wallets";
import { baseSepolia } from "viem/chains";

const client = new ApolloClient({
  uri: SERVER_ENDPOINT,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <PrivyProvider
        appId={PRIVY_APP_ID}
        config={{
          // Display email and wallet as login methods
          loginMethods: ["email", "wallet", "google"],
          // Customize Privy's appearance in your app
          appearance: {
            theme: "dark",
            accentColor: "#676FFF",
            logo: "/logo.svg",
          },
          // Create embedded wallets for users who don't have a wallet
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
            // createOnLogin: "all-users",
          },
          // defaultChain: sepolia,
          // supportedChains: [sepolia],

          defaultChain: baseSepolia,
          supportedChains: [baseSepolia],
        }}
      >
        <SmartWalletsProvider>
          {/* <Provider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
          {/* </Provider> */}
        </SmartWalletsProvider>
      </PrivyProvider>
    </ApolloProvider>
  </StrictMode>
);
