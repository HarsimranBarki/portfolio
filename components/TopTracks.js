import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Link, Text } from "@chakra-ui/layout";

export default function TopTracks() {
  const { data } = useSWR("/api/now-playing", fetcher);

  if (!data) {
    return null;
  }

  return (
    <Link href={data.songUrl} target="_blank" ml={1}>
      {data.title} ({data.album})
    </Link>
  );
}
