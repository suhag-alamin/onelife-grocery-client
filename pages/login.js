import Link from "next/link";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import registerStyles from "../styles/Register.module.scss";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  //   useEffect(() => {}, []);
  return (
    <>
      {/* title  */}
      <Header title="Login - OneLife Grocery" />
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
          <div>
            <p className="text-center border-bottom pb-1">
              Or sign in Using Google
            </p>
            <div className="text-center">
              <Button onClick={signInWithGoogle} variant="text">
                {" "}
                <FcGoogle className="fs-1" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
