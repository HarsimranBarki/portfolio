import { Metadata } from "next";
import Form from "@/app/contact/form";

export const metadata: Metadata = {
  title: "Contact Me | Harsimran Singh",
  description: "Find me.",
};

export default function ProjectsPage() {
  return <Form />;
}
