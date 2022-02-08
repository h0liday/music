import { Song } from "../models/SongModel";

const fetchTop100Songs = async (): Promise<Song[]> => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  const jsonResponse = await response.json();
  return jsonResponse.feed.entry;
};

export { fetchTop100Songs };
