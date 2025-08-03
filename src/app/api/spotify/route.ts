import { NextResponse } from 'next/server';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface LastPlayedData {
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  playedAt: string;
}

const getAccessToken = async (): Promise<SpotifyTokenResponse> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  });

  const text = await response.text();
  if (!response.ok) throw new Error(`Failed to get access token: ${response.status} → ${text}`);
  return JSON.parse(text);
};

const getLastPlayedTrack = async () => {
  const { access_token } = await getAccessToken();
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function GET() {
  try {
    const response = await getLastPlayedTrack();

    if (!response.ok) {
      const errText = await response.text();
      console.error('Spotify API error:', errText);
      return NextResponse.json({ error: 'Failed to fetch last played track' }, { status: 400 });
    }

    const data = await response.json();
    const item = data.items?.[0];

    if (!item || !item.track) {
      return NextResponse.json({ error: 'No recently played track found' }, { status: 404 });
    }

    const track = item.track;

    type Artist = { name: string };
    const result: LastPlayedData = {
      title: track.name,
      album: track.album.name,
      artist: track.artists.map((a: Artist) => a.name).join(', '),
      albumImageUrl: track.album.images?.[0]?.url || '',
      songUrl: track.external_urls.spotify,
      playedAt: item.played_at,
    };

    return NextResponse.json(result);
  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
