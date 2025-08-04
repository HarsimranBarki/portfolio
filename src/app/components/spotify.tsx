import { LastPlayedTrack } from '@/types/spotify';
import { IconBrandSpotify } from '@tabler/icons-react';
import { Box, Group, Image, Stack, Text, Title, Anchor, Paper } from '@mantine/core';

async function getLastPlayed(): Promise<LastPlayedTrack | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/spotify`, {
      cache: 'no-cache',
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function NowPlayingServer() {
  const song = await getLastPlayed();

  if (!song) {
    return (
      <Group mt="xl" gap="xs">
        <IconBrandSpotify size={20} color="#1DB954" />
        <Text size="sm" c="dimmed">
          Hmm... looks like Spotify is being shy. No track found!
        </Text>
      </Group>
    );
  }

  return (
    <Paper shadow="xs" radius="md" p="md" mt="xl" withBorder>
      <Stack gap="xs">
        <Group gap={8}>
          <IconBrandSpotify size={18} color="#1DB954" />
          <Text size="sm">Recently vibing to...</Text>
        </Group>

        <Group align="center" wrap="nowrap" gap="md">
          <Box w={100}>
            <Image
              src={song.albumImageUrl}
              alt={`Cover art of ${song.album}`}
              width={100}
              height={100}
              radius="md"
              fit="cover"
            />
          </Box>

          <Stack gap={2} justify="center">
            <Title order={5}>{song.title}</Title>
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
                Check on spotify
              </Anchor>
            )}
          </Stack>
        </Group>
      </Stack>
    </Paper>
  );
}
