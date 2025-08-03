"use client";
import { useEffect, useState } from "react";
import { Box, Image, Text, Anchor, Skeleton, Group } from "@mantine/core";

interface Song {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

const Spotify: React.FC = () => {
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/spotify");

        // Check for empty response (204 No Content or bad response)
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const text = await res.text();

        if (!text) {
          throw new Error("Empty response body");
        }

        const data = JSON.parse(text); // safe now
        setSong(data);
      } catch (err) {
        console.error("Failed to fetch now playing:", err);
        setSong(null); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
  }, []);

  if (loading) {
    return <Skeleton height={70} radius="md" />;
  }

  if (!song?.isPlaying) {
    return (
      <Text size="sm" c="dimmed">
        Not listening to anything right now 🎧
      </Text>
    );
  }

  return (
    <Group align="center" gap="md" wrap="nowrap">
      <Image
        src={song.albumImageUrl}
        alt="Album cover"
        width={60}
        radius="sm"
      />
      <Box>
        <Anchor href={song.songUrl} target="_blank" underline="always" fw={600}>
          {song.title}
        </Anchor>
        <Text size="sm" c="dimmed">
          {song.artist}
        </Text>
      </Box>
    </Group>
  );
};

export default Spotify;
