import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Link, Text } from "@chakra-ui/layout";

export default function TopTracks() {
  const { data } = useSWR("/api/now-playing", fetcher);

  if (!data) {
    return null;
  }

  if (data.length == 0) {
    return <>Spotify - Not Playing</>;
  }

  return <> Spotify - {data.title}</>;
}
