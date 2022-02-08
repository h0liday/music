import { Song } from "../models/SongModel";

const filterSongsByTitle = (songs: Song[], title: string): Song[] => {
  return songs.filter((song) =>
    song["im:name"].label.toLowerCase().includes(title.toLowerCase())
  );
};

export { filterSongsByTitle };
