import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Link, Text } from "@chakra-ui/layout";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }
  console.log(data);

  return (
    <Link ml={1} href={data.tracks[0].songUrl}>
      {""} {data.tracks[0].title} by {data.tracks[0].artist}
    </Link>
  );
}
