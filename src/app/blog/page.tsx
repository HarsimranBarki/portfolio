import { Metadata } from 'next';
import { Container } from '@mantine/core';
import AnimatePage from '@/app/components/layout/animate-page';
import ResponsiveText from '@/app/components/common/ResponsiveText';
import ResponsiveHeader from '@/app/components/common/ResponsiveHeader';

export const metadata: Metadata = {
  title: 'Blogs | Harsimran Singh',
  description: 'Blogs.',
};

export default function ProjectsPage() {
  return (
    <AnimatePage>
      <Container size="md" py="xl">
        <ResponsiveHeader text="BLOGS" />
        <ResponsiveText>
          I write about my learnings, experiences, and thoughts on various topics. Stay tuned for updates!
        </ResponsiveText>
      </Container>
    </AnimatePage>
  );
}
