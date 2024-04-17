import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import Footer from "../Components/Footer/Footer";

import Header from "../Components/Header/Header";
import Loading from "../Components/Loading/Loading";

import { UseToken } from "../hooks";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();


  let from = location.state?.from?.pathname || "/";

  

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // await signInWithEmailAndPassword(email, password);
    e.target.reset();
  };
  

  return (
    <>
      <Header />

      <div style={{ marginTop: "120px" }}>
        {" "}
        <AuthenticationForm  />
      </div>
      <Footer />
    </>
  );
};

export default Login;
