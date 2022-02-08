import { FC, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Song } from "../../models/SongModel";
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

  console.log(songs);

  return (
    <div className="wrapper">
      <SearchInput placeholder={"Search by Album Title"} onChange={handleSearchChange} value={searchValue} />
      <ListGroup>
        {songs.map((song) => (
          <ListItem key={song.id.label} song={song} />
        ))}
      </ListGroup>
    </div>
  );
};

export default SongList;
