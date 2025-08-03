// components/NowPlaying.tsx
"use client";

import { useState, useEffect, JSX } from "react";
import { CurrentPlayingData } from "@/types/spotify";

export default function NowPlaying(): JSX.Element {
  const [song, setSong] = useState<CurrentPlayingData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCurrentlyPlaying = async (): Promise<void> => {
      try {
        const response = await fetch("/api/spotify");
        const data: CurrentPlayingData = await response.json();
        setSong(data);
      } catch (error) {
        console.error("Error fetching currently playing song:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentlyPlaying();

    // Poll for updates every 30 seconds
    const interval = setInterval(fetchCurrentlyPlaying, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="text-gray-600">Loading current track...</div>;
  }

  if (!song || !song.isPlaying) {
    return <div className="text-gray-500">Not currently playing any music</div>;
  }

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white shadow-sm">
      {song.albumImageUrl && (
        <img
          src={song.albumImageUrl}
          alt={`${song.album} cover`}
          className="w-16 h-16 rounded-md object-cover"
        />
      )}
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-gray-900">{song.title}</h3>
        <p className="text-gray-600">by {song.artist}</p>
        <p className="text-gray-500 text-sm">{song.album}</p>
        {song.songUrl && (
          <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline text-sm"
          >
            Open in Spotify
          </a>
        )}
      </div>
    </div>
  );
}
