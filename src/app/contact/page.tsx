import { Metadata } from "next";
import Form from "@/app/contact/form";
import { Container } from "@mantine/core";

export const metadata: Metadata = {
  title: "Contact Me | Harsimran Singh",
  description: "Find me.",
};

export default function ProjectsPage() {
  return (
    <Container size="md" py="xl">
      <Form />
    </Container>
  );
}
