import Hero from "@/components/Hero";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";
export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Box>
      <Head>
        <title>Harsimran Singh Barki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{isTabletOrMobile ? null : <Hero />}</main>
    </Box>
  );
}
