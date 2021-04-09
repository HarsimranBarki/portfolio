import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import theme from "@/styles/theme";
import NavBar from "@/components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
