import { FC } from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

const Footer: FC = () => {
  return (
    <div className="fixed-bottom">
      <Navbar color="dark">
        <Container>
          <NavbarBrand>Forberedelse til teknisk intervju 25. mai</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
