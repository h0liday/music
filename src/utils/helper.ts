import { Song } from "../models/SongModel";

interface FilterSongsArgs {
  songs: Song[];
  title: string;
  categories: string[];
}

const filterSongsByTitle = (songs: Song[], title: string): Song[] => {
  return songs.filter((song) =>
    song["im:name"].label.toLowerCase().includes(title.toLowerCase())
  );
};

const filterSongs = ({ categories, songs, title }: FilterSongsArgs): Song[] => {
  return songs.filter((song) => {
    if (categories.length > 0) {
      return (
        song["im:name"].label.toLowerCase().includes(title.toLowerCase()) &&
        categories.includes(song.category.attributes.label)
      );
    } else {
      return song["im:name"].label.toLowerCase().includes(title.toLowerCase());
    }
  });
};

const getUniqueCategories = (songs: Song[]): string[] => {
  const categories: string[] = [];
  for (let i = 0; i < songs.length; i++) {
    const categoryName = songs[i].category.attributes.label;
    if (!categories.includes(categoryName)) {
      categories.push(categoryName);
    }
  }

  return categories;
};

export { filterSongsByTitle, getUniqueCategories, filterSongs };
