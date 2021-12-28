import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CheckoutForm from "../components/Cart/CheckoutFrom";
import OthersBanner from "../components/OthersBanner";
import useAuth from "../hooks/useAuth";
import checkoutStyles from "../styles/Checkout.module.scss";

const stripePromise = loadStripe(
  "pk_test_51Jvw1LGITY56CrX5VJRHNFpXy4tLNzFhkN82MDTtAmbCqy2wMlk7IfoxiDMyckwgqIZkI8B7MVzObX86W2qnMdaF00GELkrPsc"
);

const Checkout = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: user?.displayName,
      email: user?.email,
    },
  });

  const { cartItems, totalPrice } = useSelector((state) => state.groceryCart);
  const orderedItems = cartItems?.map((item) => item._id);

  const onSubmit = (data) => {
    const { userName, email, phone, address, zipCode, city, notes } = data;
    data.orderedItems = orderedItems;
    data.totalPrice = totalPrice;
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <OthersBanner>Checkout</OthersBanner>
      <Container className={`${checkoutStyles.checkoutContainer} py-5`}>
        <Row xs={1} md={1} className="g-4">
          <Col>
            <div className={`${checkoutStyles.checkout} shadow`}>
              <h3>Please give few details</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Your Name"
                  {...register("userName", { required: true })}
                />
                <Form.Control
                  required
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: true,
                  })}
                />
                <Form.Control
                  required
                  type="number"
                  placeholder="Phone"
                  {...register("phone", {
                    required: true,
                  })}
                />

                <Form.Control
                  required
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
                <Form.Control
                  required
                  type="number"
                  placeholder="Zip Code"
                  {...register("zipCode", { required: true })}
                />

                <Form.Control
                  required
                  type="text"
                  placeholder="City"
                  {...register("city", { required: true })}
                />
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Order Notes (Optional) "
                  {...register("notes")}
                />

                <Button type="submit" variant="">
                  Order
                </Button>
              </form>
              {/* <div>
              <p className="text-center border-bottom pb-1">
              Or sign in Using Google
              </p>
              <div className="text-center">
                <Button onClick={signInWithGoogle} variant="text">
                {" "}
                <FcGoogle className="fs-1" />
                </Button>
                </div>
              </div> */}
            </div>
          </Col>
          {/* <Col> */}
          {/* <Button type="submit" variant="success">
                Register
              </Button> */}
          {/* <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements> */}
          {/* </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
