export interface Artist {
  name: string;
}

export interface AlbumImage {
  url: string;
}

export interface Album {
  name: string;
  images: AlbumImage[];
  artists: Artist[];
}

export interface Track {
  name: string;
  album: Album;
  artists: Artist[];
  external_urls: {
    spotify: string;
  };
}

export interface LastPlayedTrack {
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
  playedAt: string;
}
