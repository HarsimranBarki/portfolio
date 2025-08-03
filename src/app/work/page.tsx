import { Metadata } from "next";
import WorkTimeline from "@/app/work/work-timeline";
import { Container } from "@mantine/core";

export const metadata: Metadata = {
  title: "Work | Harsimran Singh",
  description: "Work history.",
};

export default function ProjectsPage() {
  return (
    <Container size="md" py="xl">
      <WorkTimeline />
    </Container>
  );
}
