import React from "react";
import Nav from "../components/HomePage/Nav";
import LoginForm from "../components/LoginPage/LoginForm";

const LoginPage = () => {
  return (
    <section className="loginPage">
      <Nav />
      <LoginForm />
    </section>
  );
};

export default LoginPage;
