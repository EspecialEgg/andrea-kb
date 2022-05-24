import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation: FC = () => {
  return (
    <Navbar bg="white" variant="light" sticky="top" className="navbar">
      <Nav className="nav-links">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/projects">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/nasaapi">
          Astronomy Picture of the Day
        </Nav.Link>
        <Nav.Link as={Link} to="/postcardssent">
          Postcards sent
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
