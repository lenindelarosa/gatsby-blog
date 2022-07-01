import React from "react";
import { Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';


const NavBar = () => (

<Navbar sticky="top" bg="inherit" className="justify-content-center">
  <Container>
    <Navbar.Brand href="/">Lenin's Animals Blog</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

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
  </Container>
</Navbar>
);

export default NavBar;