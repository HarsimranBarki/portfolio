import ResponsiveHeader from "@/app/components/common/ResponsiveHeader";
import { Container } from "@mantine/core";
import { Metadata } from "next";
import ResponsiveText from "@/app/components/common/ResponsiveText";

export const metadata: Metadata = {
  title: "Blogs | Harsimran Singh",
  description: "Blogs.",
};

export default function ProjectsPage() {
  return (
    <Container size="md" py="xl">
      <ResponsiveHeader text="BLOGS" />
      <ResponsiveText>
        I write about my learnings, experiences, and thoughts on various topics.
        Stay tuned for updates!
      </ResponsiveText>
    </Container>
  );
}
