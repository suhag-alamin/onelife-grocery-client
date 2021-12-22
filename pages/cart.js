import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import withAuth from "../components/withAuth";
import cartStyles from "../styles/Cart.module.scss";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.groceryCart);
  const router = useRouter();
  const handleClick = () => {
    router.push("/checkout");
  };

  return (
    <Container className={`${cartStyles.cartContainer} py-5`}>
      <h3>Groceries on your Cart</h3>
      <Row xs={1} md={1} className="g-4">
        {cartItems.map((cartItem) => (
          <Col key={cartItems._id}>
            <CartItem cartItem={cartItem} />
          </Col>
        ))}
      </Row>
      <div className="mt-4">
        <Button onClick={handleClick} variant="">
          {" "}
          Proceed to checkout
        </Button>
      </div>
    </Container>
  );
};

export default withAuth(Cart);
