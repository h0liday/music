import { useCallback, useEffect, useState } from "react";
import { Song } from "../models/SongModel";
import { fetchTop100Songs } from "../services/songsService";

const useGetTopSongs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);

  const fetchSongs = useCallback(async () => {
    setIsLoading(true);
    try {
      const songs = await fetchTop100Songs();
      setSongs(songs);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  return {
    isLoading,
    songs: songs,
    error,
  };
};

export { useGetTopSongs };
