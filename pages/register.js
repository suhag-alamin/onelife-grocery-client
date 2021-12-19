import Link from "next/link";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
// import { useForm } from "react-hook-form";
import registerStyles from "../styles/Register.module.scss";

const Register = () => {
  const { handleEmailRegister, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      {/* title  */}
      <Header title="Register - OneLife Grocery" />
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
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <Form.Control
              type="password"
              placeholder="Your password"
              {...register("password", { required: true })}
            />
            <Form.Control
              type="password"
              placeholder="Re enter your password"
              {...register("reEnterPassword", { required: true })}
            />

            <Button type="submit" variant="success">
              Register
            </Button>
          </form>
          <p className="mt-2">
            Already registered? <Link href="/login">Login</Link>{" "}
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

export default Register;
