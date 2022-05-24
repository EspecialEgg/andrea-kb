import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Routing from "./routing/Routing";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navigation />
        <Routing />
      </BrowserRouter>
    </Container>
  );
}

export default App;
