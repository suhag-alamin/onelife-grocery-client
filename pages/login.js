import Link from "next/link";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";
import registerStyles from "../styles/Register.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  //   useEffect(() => {}, []);
  return (
    <Container className="py-5 mb-5">
      <h3 className={`${registerStyles.title} text-center mb-4`}>
        Please Login
      </h3>
      <div className={`${registerStyles.registration} shadow`}>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <Button type="submit" variant="success">
            Register
          </Button>
        </form>
        <p>
          New user? <Link href="/register">Register here</Link>{" "}
        </p>
      </div>
    </Container>
  );
};

export default Login;
