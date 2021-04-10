import Hero from "@/components/Hero";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Harsimran Singh Barki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </Box>
  );
}
