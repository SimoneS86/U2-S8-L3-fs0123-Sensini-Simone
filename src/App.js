import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      <BookList books={fantasy} />
      <MyFooter />
    </Container>
  );
}

export default App;
