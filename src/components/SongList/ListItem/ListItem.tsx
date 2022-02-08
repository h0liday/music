import { FC } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { Song } from "../../../models/SongModel";
import { ReactComponent as HeartIcon } from "../../../assets/images/heart.svg";
import { ReactComponent as HeartEmptyIcon } from "../../../assets/images/heart-empty.svg";
import "./ListItem.css";
interface ListItemProps {
  song: Song;
  onFavorite?: (songId: string) => void;
  favoritedSongsIds: string[];
  withFavorite?: boolean;
}

const ListItem: FC<ListItemProps> = ({
  song,
  onFavorite,
  favoritedSongsIds,
  withFavorite,
}) => {
  return (
    <ListGroup.Item key={song.id.label} className="d-flex align-items-start">
      <img alt={"album img"} src={song["im:image"][0].label} />
      <div className="description">
        <div className="text fw-bold">
          <a
            className="link"
            rel="noreferrer"
            href={song.link.attributes.href}
            target="_blank"
          >
            {song["im:name"].label}
          </a>
        </div>
        <div className="text">
          <a
            className="link"
            rel="noreferrer"
            href={
              song["im:artist"].attributes?.href ||
              "https://music.apple.com/us/artist"
            }
            target="_blank"
          >
            {song["im:artist"].label}
          </a>
        </div>
        <div className="other">
          <div className="secondaryText">
            Songs:{" "}
            <Badge bg="secondary" className="ml-5" pill>
              {song["im:itemCount"].label}
            </Badge>
          </div>
          <div className="secondaryText">
            Price:{" "}
            <Badge className="ml-5" pill>
              {song["im:price"].label}
            </Badge>
          </div>
          <div className="secondaryText">
            Category:{" "}
            <Badge className="ml-5" bg="dark" pill>
              {song.category.attributes.label}
            </Badge>
          </div>
        </div>
      </div>
      {withFavorite && (
        <div className={"actions"}>
          {favoritedSongsIds.includes(song.id.label) ? (
            <HeartIcon
              className={"icon"}
              onClick={() => onFavorite?.(song.id.label)}
            />
          ) : (
            <HeartEmptyIcon
              className={"icon"}
              onClick={() => onFavorite?.(song.id.label)}
            />
          )}
        </div>
      )}
    </ListGroup.Item>
  );
};

export default ListItem;
