import { Container } from "@mantine/core";
import ResponsiveHeader from "@/app/components/common/ResponsiveHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Harsimran Singh",
  description: "Blogs.",
};

export default function ProjectsPage() {
  return (
    <Container size="md" py="xl">
      <ResponsiveHeader text="BLOGS" />
    </Container>
  );
}
