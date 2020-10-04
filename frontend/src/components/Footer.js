import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// py-3 means vertical padding of 3.
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
