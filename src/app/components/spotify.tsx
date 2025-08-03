"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Group,
  Image,
  Skeleton,
  Stack,
  Text,
  Title,
  Anchor,
} from "@mantine/core";
import { IconBrandSpotify } from "@tabler/icons-react";
import { CurrentPlayingData } from "@/types/spotify";

export default function NowPlaying() {
  const [song, setSong] = useState<CurrentPlayingData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();
        setSong(data);
      } catch (error) {
        console.error("Error fetching now playing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentlyPlaying();
  }, []);

  if (loading) {
    return <Skeleton height={80} radius="md" />;
  }

  if (!song || !song.isPlaying) {
    return (
      <Group mt="xl">
        <IconBrandSpotify size={20} color="#1DB954" />
        <Text size="sm" c="dimmed">
          Not currently playing anything
        </Text>
      </Group>
    );
  }

  return (
    <Stack mt="3rem" gap="xs">
      <Text size="sm"> Last played on Spotify :)</Text>
      <Group align="center" wrap="nowrap">
        <Box w="120px">
          <Image
            src={song.albumImageUrl}
            alt={song.album}
            width={120}
            height={120}
            radius="md"
            fit="contain"
          />
        </Box>

        <Stack gap={4} justify="center">
          <Title order={5} fw={600} c="dark">
            {song.title}
          </Title>
          <Text size="sm" c="dimmed">
            {song.artist}
          </Text>
          <Text size="xs" c="gray">
            {song.album}
          </Text>
          {song.songUrl && (
            <Anchor
              href={song.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="xs"
              c="green"
              underline="hover"
            >
              Open in Spotify
            </Anchor>
          )}
        </Stack>
      </Group>
    </Stack>
  );
}
