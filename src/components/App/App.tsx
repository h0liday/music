import "./App.css";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import SongList from "../SongList/SongList";
import { useGetTopSongs } from "../../hooks/useGetTopSongs";

function App() {
  const { error, loading, songs } = useGetTopSongs();

  const renderAppContent = () => {
    if (error) {
      return (
        <Alert>
          Error occured while fetching data, please try again later.
        </Alert>
      );
    }

    if (loading) {
      return <Spinner animation="border" variant="primary" />;
    }

    if (songs.length > 0) {
      return (
        <Row>
          <Col xs={12} md={8}>
            <h3 className="fw-bold">ITunes Top Albums</h3>
            <SongList songs={songs} />
          </Col>
          <Col xs={12} md={4}>
            2 of 2
          </Col>
        </Row>
      );
    }

    return null;
  };
  return <Container className="App">{renderAppContent()}</Container>;
}

export default App;
