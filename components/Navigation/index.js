import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import navStyles from "../../styles/Navigation.module.scss";
import { AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const { cartItems } = useSelector((state) => state.groceryCart);
  return (
    <>
      <Navbar sticky="top" className={navStyles.nav} bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="me-5" as={Link} href="/">
            <Image
              className={navStyles.logo}
              src={logo}
              alt="OneLIfe-Grocery"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-4 me-auto d-flex align-items-center">
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
            {/* right part  */}
            <Nav className="ms-auto d-flex align-items-center">
              <div className="me-4">
                <AiOutlineShoppingCart className="fs-4" />
                <small className="cart-item">{cartItems.length}</small>
              </div>
              {user?.email && (
                <div className="me-2">
                  <span>{user?.displayName}</span>
                </div>
              )}
              {!user?.email ? (
                <Nav.Link as={Link} className="mt-2 mt-md-0" href="/login">
                  <a>
                    Login
                    <AiOutlineLogin className="ms-1" />
                  </a>
                </Nav.Link>
              ) : (
                <Button
                  className="d-flex align-items-center gap-1"
                  onClick={logOut}
                  variant=""
                >
                  Log Out
                  <BiLogOutCircle style={{ color: "#f8f4e3" }} />
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
