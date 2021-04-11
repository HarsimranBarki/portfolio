import Hero from "@/components/Hero";
import HeroMobile from "@/components/HeroMobile";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";
export default function Home() {
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });
  return (
    <Box>
      <Head>
        <title>Harsimran Singh Barki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box display={{ base: "none", md: "none", lg: "block" }}>
          <Hero />
        </Box>
        <Box display={{ base: "block", md: "block", lg: "none" }}>
          <HeroMobile />
        </Box>
      </main>
    </Box>
  );
}
