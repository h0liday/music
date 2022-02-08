import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import SongList from "../SongList/SongList";

function App() {
  return (
    <Container className="App">
      <Row>
        <Col>
          <SongList />
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default App;
