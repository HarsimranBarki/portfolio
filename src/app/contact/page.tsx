import { Metadata } from 'next';
import Form from '@/app/contact/form';
import { Container } from '@mantine/core';
import AnimatePage from '@/app/components/layout/animate-page';

export const metadata: Metadata = {
  title: 'Contact Me | Harsimran Singh',
  description: 'Find me.',
};

export default function ProjectsPage() {
  return (
    <AnimatePage>
      <Container size="md" py="xl">
        <Form />
      </Container>
    </AnimatePage>
  );
}
