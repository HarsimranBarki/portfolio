// pages/api/now-playing.ts
import type { NextApiRequest, NextApiResponse } from "next";

const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
  });

  const json = await res.json();
  return json.access_token;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const access_token = await getAccessToken();

    const nowPlayingRes = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await nowPlayingRes.json();

    res.status(200).json({
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((a: any) => a.name).join(", "),
      albumImageUrl: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch now playing" });
  }
}
