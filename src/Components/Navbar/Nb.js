import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Nb() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" href="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio" href="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/profile" href="/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" href="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/about" href="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
