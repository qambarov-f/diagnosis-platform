import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

const HeaderBootstrap = () => {
  return (
    <Navbar expand="lg">
      <Container fluid className="d-flex justify-content-center">
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Ana Səhifə</Nav.Link>
            <Nav.Link href="#action2">Haqqımızda</Nav.Link>
            <Nav.Link href="#">Xəbərlər</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Əlaqə</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBootstrap;