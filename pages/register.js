import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import registerStyles from "../styles/Register.module.scss";

const register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Container className="py-5">
      <h3>Registration</h3>
      <div className={registerStyles.registration}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Control
            type="text"
            placeholder="userName"
            {...register("userName", { required: true })}
          />
          <Form.Control
            type="text"
            placeholder="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <Form.Control
            type="text"
            placeholder="password"
            {...register("password", { required: true })}
          />
          <Form.Control
            type="text"
            placeholder="reEnterPassword"
            {...register("reEnterPassword", { required: true })}
          />

          <Button type="submit" variant="success">
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default register;
