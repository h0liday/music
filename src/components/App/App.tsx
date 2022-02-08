import "./App.css";
import {
  Container,
  Row,
  Col,
  Alert,
  Spinner,
  Tabs,
  Tab,
} from "react-bootstrap";
import SongList from "../SongList/SongList";
import { useGetTopSongs } from "../../hooks/useGetTopSongs";
import { useState } from "react";
import FavoriteSongs from "../FavoriteSongs/FavoriteSongs";

function App() {
  const { error, loading, songs } = useGetTopSongs();
  const [favoritedSongsIds, setFavoritedSongsIds] = useState<string[]>([]);

  const handleSetFavoriteSong = (songId: string) => {
    const copiedFavoriteSongIds = [...favoritedSongsIds];
    if (copiedFavoriteSongIds.includes(songId)) {
      setFavoritedSongsIds(copiedFavoriteSongIds.filter((id) => id !== songId));
    } else {
      copiedFavoriteSongIds.push(songId);
      setFavoritedSongsIds(copiedFavoriteSongIds);
    }
  };

  const renderAppContent = () => {
    if (error) {
      return (
        <Alert variant="danger">
          Error occured while fetching data, please try again later.
        </Alert>
      );
    }

    if (loading) {
      return <Spinner animation="border" variant="primary" role={"spinner"}/>;
    }

    if (songs.length > 0) {
      return (
        <Tabs
          defaultActiveKey="top"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="top" title="Top Albums" data-testid="top">
            <Row className={"justify-content-center"}>
              <Col xs={12} md={8}>
                <h3 className="fw-bold">ITunes Top Albums</h3>
                <SongList
                  songs={songs}
                  onFavorite={handleSetFavoriteSong}
                  favoritedSongsIds={favoritedSongsIds}
                />
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="favorite" title="Favorite Albums" data-testid="favorite">
            <Row className={"justify-content-center"}>
              <Col xs={12} md={8}>
                <h3 className="fw-bold">Favorite Albums</h3>
                <FavoriteSongs
                  songs={songs}
                  favoritedSongsIds={favoritedSongsIds}
                />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      );
    }

    return null;
  };
  return <Container className="App">{renderAppContent()}</Container>;
}

export default App;
