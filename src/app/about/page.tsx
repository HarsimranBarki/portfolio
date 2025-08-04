import type { Metadata } from 'next';
import { Container, Stack } from '@mantine/core';
import AnimatePage from '@/app/components/layout/animate-page';
import ResponsiveText from '@/app/components/common/ResponsiveText';
import ResponsiveHeader from '@/app/components/common/ResponsiveHeader';

export const metadata: Metadata = {
  title: 'About Me – Harsimran Singh',
  description:
    'Learn more about Harsimran, a software engineer based in Bangalore, passionate about thoughtful and human-centered digital experiences.',
};

const About: React.FC = () => {
  return (
    <AnimatePage>
      <Container py="xl">
        <ResponsiveHeader text="ABOUT ME" />
        <Stack gap="md" mt="lg">
          <ResponsiveText>
            👋 Hi, I&apos;m Harsimran — a software engineer based in Bangalore, quietly building things that (hopefully)
            make the web a little more thoughtful. My path into tech wasn&apos;t conventional or easy. I didn&apos;t
            grow up coding or ace every exam. I often doubted myself, wondering if I was cut out for this world. But
            over time — through patience, persistence, and a lot of quiet nights spent learning alone — I found
            confidence in code 🧩 and a way to express myself through it.
          </ResponsiveText>

          <ResponsiveText>
            💻 For me, software isn&apos;t just logic or performance — it&apos;s about emotion, clarity, and care. I
            value building things that not only work well, but feel human. I care about the people who use my work, and
            I care about how they feel while using it. I&apos;m always learning, always curious, always trying to grow —
            both as an engineer and as a person.
          </ResponsiveText>

          <ResponsiveText>
            🌱 Outside work, you&apos;ll find me exploring new tech, reflecting on the strange beauty of life 🌌, or
            occasionally writing my thoughts just to understand them better. I&apos;m still figuring things out — and
            maybe that&apos;s the point. If you ever feel like reaching out or sharing your own journey, I&apos;d love
            to hear it 🤝.
          </ResponsiveText>
        </Stack>
      </Container>
    </AnimatePage>
  );
};

export default About;
