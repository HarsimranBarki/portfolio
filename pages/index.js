import About from "@/components/About";
import Hero from "@/components/Hero";
import HeroMobile from "@/components/HeroMobile";
import Things from "@/components/Things";
import Who from "@/components/Who";
import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";
export default function Home() {
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });
  return (
    <Box>
      <Head>
        <title>Harsimran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box display={{ base: "none", md: "none", lg: "block" }}>
          <Hero />
        </Box>
        <Box display={{ base: "block", md: "block", lg: "none" }}>
          <HeroMobile />
        </Box>
        <Who />
        <Things />
        <About />
      </main>
    </Box>
  );
}
