import { Container, Stack, Text, Title } from "@mantine/core";
import ResponsiveHeader from "@/app/components/common/ResponsiveHeader";

const About: React.FC = () => {
  return (
    <Container py="xl">
      <ResponsiveHeader text="ABOUT ME" />
      <Stack gap={20} mt={20}>
        <Title order={1}>Hi, I&apos;m Harsimran</Title>
        <Text size="lg" mt="md">
          I’m a software engineer based in Bangalore with a passion for crafting
          meaningful digital experiences. While my Home page tells you what I do
          — this page is about who I am.
        </Text>

        <Title order={2} mt="xl">
          My Journey
        </Title>
        <Text>
          From struggling with self-doubt to finding confidence in code, my
          journey hasn’t been easy — but it’s been real. I didn’t come from a
          perfect tech background, but I taught myself, piece by piece, and
          built not just apps but belief.
        </Text>

        <Title order={2} mt="xl">
          My Values
        </Title>
        <Text>
          I believe great software is not just efficient — it’s empathetic. I
          value emotional honesty, long-term learning, and building things that
          feel human.
        </Text>

        <Title order={2} mt="xl">
          Beyond Work
        </Title>
        <Text>
          When I’m not coding, I’m learning new Tech, reflecting on life, or
          occasionally writing my thoughts. I believe in growth — both personal
          and professional.
        </Text>
      </Stack>

      <Text>If you’d like to connect, feel free to reach out!</Text>
    </Container>
  );
};

export default About;
