import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function TopTracks() {
  const { data, error } = useSWR("/api/now-playing", fetcher);

  if (error) {
    return <div>Spotify - Not Playing</div>;
  }

  if (!data) {
    return <div>Checking...</div>;
  }
  console.log(data);
  if (data.isPlaying == false) {
    return <div>Spotify - Not Playing</div>;
  }
  return <div> Spotify - {data.title}</div>;
}
