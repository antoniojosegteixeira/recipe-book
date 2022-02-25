import "../styles/globals.css";
import { StoreProvider } from "../context/Store";
import { SWRConfig } from "swr";
import fetcher from "../swr/fetcher";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SWRConfig>
  );
}

export default MyApp;
