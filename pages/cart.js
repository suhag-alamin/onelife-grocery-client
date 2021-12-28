import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import CartItem from "../components/Cart/CartItem";
import Header from "../components/Header";
import OthersBanner from "../components/OthersBanner";
import withAuth from "../components/withAuth";
import { discountedPrice } from "../redux/slices/cartSlice";
import cartStyles from "../styles/Cart.module.scss";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.groceryCart);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    router.push("/checkout");
  };

  const [success, setSuccess] = useState(false);
  const couponRef = useRef();

  const handleCoupon = (e) => {
    e.preventDefault();
    if (couponRef.current.value === "my20") {
      const newPrice = totalPrice * 0.2;
      dispatch(discountedPrice(newPrice));
      setSuccess(true);
      toast.success("Coupon code applied successfully");
    } else {
      toast.error("Coupon code does not match");
    }
  };

  return (
    <>
      {/* title  */}
      <Header title="Cart - OneLife Grocery" />
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
              Total price: <span>$ {totalPrice.toFixed(2)}</span>
            </h4>
            <div className="mt-3">
              <h6>Have Coupon?</h6>
              <form onSubmit={handleCoupon}>
                <Form.Control
                  ref={couponRef}
                  disabled={success}
                  className="w-50"
                  required
                  type="text"
                  placeholder="Coupon code (for test: my20)"
                />
                <Button
                  type="submit"
                  variant=""
                  className="mt-2"
                  disabled={success}
                >
                  Apply
                </Button>
              </form>
            </div>
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
