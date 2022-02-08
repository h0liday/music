import { FC, useState } from "react";
import { ListGroup, Alert } from "react-bootstrap";
import { Song } from "../../models/SongModel";
import { filterSongs } from "../../utils/helper";
import CategoryFilters from "../CategoryFilters/CategoryFilters";
import SearchInput from "../SearchInput/SearchInput";
import ListItem from "./ListItem/ListItem";
import "./SongList.css";
interface SongListProps {
  songs: Song[];
  onFavorite: (songId: string) => void;
  favoritedSongsIds: string[];
}

const SongList: FC<SongListProps> = ({
  songs,
  onFavorite,
  favoritedSongsIds,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleClickCategory = (categoryName: string) => {
    const copiedCategories = [...selectedCategories];
    if (copiedCategories.includes(categoryName)) {
      setSelectedCategories(
        copiedCategories.filter((category) => category !== categoryName)
      );
    } else {
      copiedCategories.push(categoryName);
      setSelectedCategories(copiedCategories);
    }
  };

  const filteredSongs = filterSongs({
    categories: selectedCategories,
    songs,
    title: searchValue,
  });

  return (
    <div className="wrapper">
      <CategoryFilters
        songs={songs}
        onCategoryClick={handleClickCategory}
        selectedCategories={selectedCategories}
      />
      <SearchInput
        placeholder={"Search by Album Title"}
        onChange={handleSearchChange}
        value={searchValue}
      />
      <ListGroup>
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <ListItem
              key={song.id.label}
              song={song}
              favoritedSongsIds={favoritedSongsIds}
              onFavorite={onFavorite}
              withFavorite
            />
          ))
        ) : (
          <Alert>There are no results</Alert>
        )}
      </ListGroup>
    </div>
  );
};

export default SongList;
