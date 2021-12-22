import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import OthersBanner from "../components/OthersBanner";
import withAuth from "../components/withAuth";
import cartStyles from "../styles/Cart.module.scss";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.groceryCart);
  const router = useRouter();
  const handleClick = () => {
    router.push("/checkout");
  };

  return (
    <>
      <OthersBanner>Groceries on your Cart</OthersBanner>
      <Container className={`${cartStyles.cartContainer} py-5`}>
        <Row xs={1} md={1} className="g-4">
          {cartItems.map((cartItem) => (
            <Col key={cartItems._id}>
              <CartItem cartItem={cartItem} />
            </Col>
          ))}
        </Row>
        <Row
          xs={1}
          md={2}
          className={`${cartStyles.singleItem} align-items-center g-4 mt-4 rounded-3 shadow-sm`}
        >
          <Col>
            <h4 className={cartStyles.totalPrice}>
              Total price: <span>$ {totalPrice}</span>
            </h4>
          </Col>

          <Col>
            <div className="text-end">
              <Button onClick={handleClick} variant="">
                {" "}
                Proceed to checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withAuth(Cart);
