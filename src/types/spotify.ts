export interface CurrentPlayingData {
  isPlaying: boolean;
  title?: string;
  album?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
  progress?: number;
  duration?: number;
}
