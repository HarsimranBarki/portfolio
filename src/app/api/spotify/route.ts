import {  NextResponse } from 'next/server';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyCurrentlyPlayingResponse {
  is_playing: boolean;
  currently_playing_type: string;
  item: {
    name: string;
    album: {
      name: string;
      images: Array<{ url: string }>;
      artists: Array<{ name: string }>;
    };
    external_urls: {
      spotify: string;
    };
    duration_ms: number;
  };
  progress_ms: number;
}

interface CurrentPlayingData {
  isPlaying: boolean;
  title?: string;
  album?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
  progress?: number;
  duration?: number;
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
  console.log('Response from token endpoint:', text);

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.status}`);
  }

  return JSON.parse(text);
};


const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
  console.log('Access Token:', access_token);
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      console.log('response status:', response.status);
      console.log('response body:', await response.text());
      return NextResponse.json({ isPlaying: false });
    }

    const song: SpotifyCurrentlyPlayingResponse = await response.json();

    if (song.currently_playing_type !== 'track') {
      return NextResponse.json({ isPlaying: false });
    }

    const data: CurrentPlayingData = {
      isPlaying: song.is_playing,
      title: song.item.name,
      album: song.item.album.name,
      artist: song.item.album.artists.map((artist) => artist.name).join(', '),
      albumImageUrl: song.item.album.images[0]?.url,
      songUrl: song.item.external_urls.spotify,
      progress: song.progress_ms,
      duration: song.item.duration_ms,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching currently playing song:', error);
    return NextResponse.json({ isPlaying: false }, { status: 500 });
  }
}
