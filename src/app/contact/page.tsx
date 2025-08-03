"use client";
import {
  Button,
  Container,
  Notification,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const About: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => (value.length < 2 ? "Name is too short" : null),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      message: (value) =>
        value.trim().length < 10 ? "Message is too short" : null,
    },
  });
  const handleSubmit = async (values: ContactFormValues): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetch("https://getform.io/f/boloxrqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <Container py="xl">
      <Stack gap={20}>
        <Title size={"7rem"} fw="900" ff="var(--font-space-grotesk">
          CONTACT ME
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            <TextInput
              label="Name"
              placeholder="Enter your name"
              {...form.getInputProps("name")}
            />

            <TextInput
              label="Email"
              placeholder="Enter your email"
              {...form.getInputProps("email")}
            />

            <Textarea
              label="Message"
              placeholder="Write your message"
              minRows={4}
              autosize
              {...form.getInputProps("message")}
            />

            <Button type="submit" size="md" mt="md" loading={loading}>
              Send Message
            </Button>
          </Stack>
        </form>

        {status === "success" && (
          <Notification
            icon={<IconCheck size={16} />}
            color="teal"
            title="Message sent!"
            mt="md"
          >
            Thanks! I’ll get back to you soon.
          </Notification>
        )}

        {status === "error" && (
          <Notification
            icon={<IconX size={16} />}
            color="red"
            title="Error"
            mt="md"
          >
            Something went wrong. Please try again later.
          </Notification>
        )}

        <Text mt="xl" size="lg">
          If you’d like to connect, feel free to reach out — I’m always happy to
          collaborate or chat.
        </Text>
      </Stack>
    </Container>
  );
};

export default About;
