import Link from "next/link";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";
import registerStyles from "../styles/Register.module.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Container className="py-5 mb-5">
      <h3 className={`${registerStyles.title} text-center mb-4`}>
        Registration
      </h3>
      <div className={`${registerStyles.registration} shadow`}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Control
            type="text"
            placeholder="Your Name"
            {...register("userName", { required: true })}
          />
          <Form.Control
            type="text"
            placeholder="Email Address"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <Form.Control
            type="text"
            placeholder="Your password"
            {...register("password", { required: true })}
          />
          <Form.Control
            type="text"
            placeholder="Re enter your password"
            {...register("reEnterPassword", { required: true })}
          />

          <Button type="submit" variant="success">
            Register
          </Button>
        </form>
        <p>
          Already registered? <Link href="/login">Login</Link>{" "}
        </p>
      </div>
    </Container>
  );
};

export default Register;
