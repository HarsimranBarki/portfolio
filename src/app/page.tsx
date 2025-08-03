import { Button, Container, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import ResponsiveHeader from "./components/common/ResponsiveHeader";
import Spotify from "./components/spotify";

export default function Home() {
  return (
    <Container size={"xl"} py="xl">
      <ResponsiveHeader text="HARSIMRAN SINGH" />

      <Text mt={20}>
        Hi!, I am a software engineer based in <strong>Bangalore</strong>, with
        a passion for building innovative and meaningful digital experiences. I
        specialize in full-stack development — crafting seamless user interfaces
        and powerful backend systems. Beyond code, I bring a strong sense of
        empathy and self-awareness to my work and life. My journey has shaped me
        into someone who cares deeply about emotional growth, responsibility,
        and creating things that genuinely help people. I believe that great
        software is not just functional, but human at its core.
      </Text>

      <Text mt="lg">
        I have hands-on experience with modern web technologies like{" "}
        <strong>Next.js</strong>, <strong>React</strong>, and{" "}
        <strong>Firebase</strong>, along with core frontend skills in{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>
        , <strong>TypeScript</strong>, <strong>Redux</strong>,{" "}
        <strong>Tailwind</strong>, <strong>MUI</strong>,{" "}
        <strong>Mantine</strong>, and <strong>Astro.js</strong>. On the backend
        and infrastructure side, I’ve worked with <strong>GoLang</strong>,{" "}
        <strong>PHP</strong>, <strong>PostgreSQL</strong>,{" "}
        <strong>MySQL</strong>, and tools like <strong>Prismic CMS</strong>,{" "}
        <strong>Formik</strong>, <strong>CI/CD pipelines</strong> (Argo, Google
        Cloud). I’m comfortable building full-stack apps with clean architecture
        and deployment-ready environments.
      </Text>

      <Link href="/contact">
        <Button
          variant="light"
          rightSection={<IconArrowRight size={14} />}
          size="md"
          mt={"32px"}
        >
          Get in Touch
        </Button>
      </Link>
      <Spotify />
    </Container>
  );
}
