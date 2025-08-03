import { Metadata } from "next";
import WorkTimeline from "@/app/work/work-timeline";

export const metadata: Metadata = {
  title: "Work | Harsimran Singh",
  description: "Work history.",
};

export default function ProjectsPage() {
  return <WorkTimeline />;
}
