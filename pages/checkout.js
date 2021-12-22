import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import OthersBanner from "../components/OthersBanner";
import useAuth from "../hooks/useAuth";
import checkoutStyles from "../styles/Checkout.module.scss";

const Checkout = () => {
  const { user } = useAuth();
  const { totalPrice } = useSelector((state) => state.groceryCart);
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
  const onSubmit = (data) => {
    const { userName, email, password, reEnterPassword } = data;
    if (password !== reEnterPassword) {
      toast.info("Password Is not matched");
      return;
    }
    handleEmailRegister(userName, email, password);
  };
  console.log(errors);
  return (
    <>
      <OthersBanner>Checkout</OthersBanner>
      <Container className={`${checkoutStyles.checkoutContainer} py-5`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <div className={`${checkoutStyles.checkout} shadow`}>
                <h3>Please give few details</h3>
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
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <Form.Control
                  required
                  type="number"
                  placeholder="Phone"
                  {...register("phone", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
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
                  type="text"
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
                  {...register("notes", { required: true })}
                />

                {/* <Button type="submit" variant="success">
                Register
              </Button> */}
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
            <Col>
              <Button type="submit" variant="success">
                Register
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Checkout;
