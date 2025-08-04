'use client';

import { Text, Timeline } from '@mantine/core';
import ResponsiveHeader from '@/app/components/common/ResponsiveHeader';

const WorkTimeline: React.FC = () => {
  return (
    <>
      <ResponsiveHeader text="MY WORK" />

      <Timeline active={0} bulletSize={24} lineWidth={2} mt={20}>
        <Timeline.Item title="Software Engineer – Searchspring">
          <Text c="dimmed" size="sm">
            April 2024 – Present
          </Text>
          <Text size="sm" mt={4}>
            Contributing to internal tooling and performance-driven interfaces that support the company&apos;s broader
            e-commerce solutions. Focused on building robust and scalable frontend components.
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Frontend Developer – Increasingly">
          <Text c="dimmed" size="sm">
            Sept 2021 – April 2024
          </Text>
          <Text size="sm" mt={4}>
            Integrated AI-powered product bundling features into e-commerce platforms for brands like Samsung, Motorola,
            and Avon. Collaborated closely with global clients to deliver high-performance custom UIs.
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Freelance Developer – Athayog Living">
          <Text c="dimmed" size="sm">
            Nov 2020 – Present
          </Text>
          <Text size="sm" mt={4}>
            Designed and built the entire web architecture — frontend to backend — to help a wellness startup grow its
            online presence and enable digital course sales.
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Full Stack Developer – Royal Brothers">
          <Text c="dimmed" size="sm">
            Apr 2019 – Nov 2020
          </Text>
          <Text size="sm" mt={4}>
            Modernized the website UI with a strong focus on customer experience and SEO optimization. Contributed
            across the stack to improve site performance and conversions.
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Frontend Intern – Royal Brothers">
          <Text c="dimmed" size="sm">
            Feb 2019
          </Text>
          <Text size="sm" mt={4}>
            Upgraded existing UI components and assisted in migrating legacy code to a more maintainable design
            structure.
          </Text>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default WorkTimeline;
