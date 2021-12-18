import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import navStyles from "../../styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <Navbar sticky="top" className={navStyles.nav} bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image src={logo} alt="OneLIfe-Grocery" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="mt-2 mt-md-0" href="/">
                <a>Home</a>
              </Nav.Link>
              <Nav.Link as={Link} className="mt-2 mt-md-0" href="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} className="mt-2 mt-md-0" href="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} className="mt-2 mt-md-0" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
