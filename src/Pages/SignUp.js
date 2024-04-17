
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import Header from "../Components/Header/Header";

import Loading from "../Components/Loading/Loading";
import Footer from "../Components/Footer/Footer";
import { UseToken } from "../hooks";

const SignUp = () => {
  let navigate = useNavigate();
  let location = useLocation();


  let from = location.state?.from?.pathname || "/";
  
  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // await createUserWithEmailAndPassword(email, password);
    // await updateProfile({ displayName: name });
    e.target.reset();
  };
  
  return (
    <>
      <Header />

      <div style={{ marginTop: "120px" }}>
        <AuthenticationForm />
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
