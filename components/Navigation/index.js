import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import navStyles from "../../styles/Navigation.module.scss";

const Navigation = () => {
  const { user, logOut } = useAuth();
  console.log(user.photoURL);
  return (
    <>
      <Navbar sticky="top" className={navStyles.nav} bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} href="/">
            <Image
              className={navStyles.logo}
              src={logo}
              alt="OneLIfe-Grocery"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
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
              {user?.email && (
                <div className="me-2">
                  <span>{user?.displayName}</span>
                </div>
              )}
              {!user?.email ? (
                <Nav.Link as={Link} className="mt-2 mt-md-0" href="/login">
                  Login
                </Nav.Link>
              ) : (
                <Button onClick={logOut} variant="">
                  Log Out
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
