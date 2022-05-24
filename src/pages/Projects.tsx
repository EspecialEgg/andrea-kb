import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calculator from "../components/Calculator";
import PostcardForm from "../components/postcard/PostcardForm";
import PostcardItem from "../components/postcard/PostcardItem";

const Projects: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Calculator />
        </Col>
        <Col>
          <PostcardForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
