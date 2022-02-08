import { FC, useState } from "react";
import { ListGroup, Alert } from "react-bootstrap";
import { Song } from "../../models/SongModel";
import { filterSongsByTitle } from "../../utils/helper";
import SearchInput from "../SearchInput/SearchInput";
import ListItem from "./ListItem/ListItem";
import "./SongList.css";
interface SongListProps {
  songs: Song[];
}

const SongList: FC<SongListProps> = ({ songs }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredSongs = filterSongsByTitle(songs, searchValue);

  return (
    <div className="wrapper">
      <SearchInput
        placeholder={"Search by Album Title"}
        onChange={handleSearchChange}
        value={searchValue}
      />
      <ListGroup>
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <ListItem key={song.id.label} song={song} />
          ))
        ) : (
          <Alert>There are no results</Alert>
        )}
      </ListGroup>
    </div>
  );
};

export default SongList;
