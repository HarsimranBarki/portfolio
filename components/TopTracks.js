import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function TopTracks() {
  const { data, error } = useSWR("/api/now-playing", fetcher);

  if (error) {
    return <>Spotify - Not Playing</>;
  }

  if (!data) {
    return <>Checking...</>;
  }

  if (data.isPlaying == false) {
    return <>Spotify - Not Playing</>;
  }
  return <> Spotify - {data.title}</>;
}
