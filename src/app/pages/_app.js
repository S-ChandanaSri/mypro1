import { ListingProvider } from "./context/ListingContext";

function MyApp({ Component, pageProps }) {
  return (
    <ListingProvider>
      <Component {...pageProps} />
    </ListingProvider>
  );
}

export default MyApp;
