import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export function Header() {
  return (
    <Navbar className="mb-4" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="https://github.com/DianaIvelinova">
          <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" />
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
