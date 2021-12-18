import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import navStyles from "../../styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <Navbar className={navStyles.nav} bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image src={logo} alt="OneLIfe-Grocery" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="nav-link" href="/">
                <a>Home</a>
              </Nav.Link>
              {/* <Nav.Link as={Link} className={navStyles.navLink} href="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} className={navStyles.navLink} href="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} className={navStyles.navLink} href="/contact">
                Contact
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
