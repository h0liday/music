import { useCallback, useEffect, useState } from "react";
import { Song } from "../models/SongModel";
import { fetchTop100Songs } from "../services/songsService";

const useGetTopSongs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);

  const fetchSongs = useCallback(async () => {
    setLoading(true);
    try {
      const songs = await fetchTop100Songs();
      setSongs(songs);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  return {
    loading,
    songs: songs,
    error,
  };
};

export { useGetTopSongs };
