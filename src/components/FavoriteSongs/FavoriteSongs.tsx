import { FC } from "react";
import { ListGroup, Alert } from "react-bootstrap";
import { Song } from "../../models/SongModel";
import ListItem from "../SongList/ListItem/ListItem";

interface FavoriteSongsProps {
  songs: Song[];
  favoritedSongsIds: string[];
}

const FavoriteSongs: FC<FavoriteSongsProps> = ({
  songs,
  favoritedSongsIds,
}) => {
  const favoriteSongs = songs.filter((song) =>
    favoritedSongsIds.includes(song.id.label)
  );

  return (
    <div className="wrapper">
      <ListGroup>
        {favoriteSongs.length > 0 ? (
          favoriteSongs.map((song) => (
            <ListItem
              key={song.id.label}
              song={song}
            />
          ))
        ) : (
          <Alert>There are no favorite albums</Alert>
        )}
      </ListGroup>
    </div>
  );
};

export default FavoriteSongs;
