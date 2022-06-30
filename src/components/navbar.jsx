import React from "react";
import { Navbar, NavDropdown, Container, Nav, Row, Col } from 'react-bootstrap';


const NavBar = () => (

<Navbar sticky="top" bg="inherit" expand="lg">
  <Container>
    <Row>
        <Col md={4}>
            <Navbar.Brand href="/">Lenin's Animals Blog</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <NavDropdown title="Posts" id="basic-nav-dropdown">
                <NavDropdown.Item href="/dogs">Dogs</NavDropdown.Item>
                <NavDropdown.Item href="/beluga">Beluga</NavDropdown.Item>
                <NavDropdown.Item href="/cockatoo">Cockatoo</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Col>

    </Row>
  </Container>
</Navbar>
);

export default NavBar;