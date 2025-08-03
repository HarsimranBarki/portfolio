import { Button, Container } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import ResponsiveHeader from "@/app/components/common/ResponsiveHeader";
import ResponsiveText from "@/app/components/common/ResponsiveText";
import Spotify from "@/app/components/spotify";

export default function Home() {
  return (
    <Container size={"xl"} py="xl">
      <ResponsiveHeader text="HARSIMRAN SINGH" />

      <ResponsiveText mt={20}>
        Hi! I’m a software engineer based in <strong>Bangalore</strong>,
        passionate about crafting meaningful digital experiences. I specialize
        in full-stack development — building seamless user interfaces and robust
        backend systems.
      </ResponsiveText>

      <ResponsiveText mt="md">
        Beyond code, I bring empathy, self-awareness, and a thoughtful approach
        to everything I create. My journey has taught me the value of emotional
        growth, personal responsibility, and designing software that truly helps
        people. I believe great software isn&apos;t just functional — it&apos;s
        human at its core.
      </ResponsiveText>

      <ResponsiveText mt="lg">
        I have hands-on experience with modern web technologies like{" "}
        <strong>Next.js</strong>, <strong>React</strong>, and{" "}
        <strong>Firebase</strong>, along with frontend skills in{" "}
        <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>
        , <strong>TypeScript</strong>, <strong>Redux</strong>,{" "}
        <strong>Tailwind</strong>, <strong>MUI</strong>,{" "}
        <strong>Mantine</strong>, and <strong>Astro.js</strong>.
      </ResponsiveText>

      <ResponsiveText mt="md">
        On the backend and infrastructure side, I’ve worked with{" "}
        <strong>GoLang</strong>, <strong>PHP</strong>,{" "}
        <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and tools like{" "}
        <strong>Prismic CMS</strong>, <strong>Formik</strong>, and{" "}
        <strong>CI/CD pipelines</strong> (Argo, Google Cloud). I’m confident
        building full-stack apps with clean architecture and deployment-ready
        environments.
      </ResponsiveText>

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
