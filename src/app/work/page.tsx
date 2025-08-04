import { Metadata } from 'next';
import { Container } from '@mantine/core';
import WorkTimeline from '@/app/work/work-timeline';
import AnimatePage from '@/app/components/layout/animate-page';

export const metadata: Metadata = {
  title: 'Work | Harsimran Singh',
  description: 'Work history.',
};

export default function ProjectsPage() {
  return (
    <AnimatePage>
      <Container size="md" py="xl">
        <WorkTimeline />
      </Container>
    </AnimatePage>
  );
}
