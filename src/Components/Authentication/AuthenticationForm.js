import { Link, useLocation } from "react-router-dom";
import { MyButtonLg } from "../MyButtons/MyButtons";
import React from "react";
import logo from "../../assets/logo/logo.png";

import "./AuthenticationForm.css";

const AuthenticationForm = ({ action, error }) => {
  const { pathname } = useLocation();

  return (
    <div className="AuthenticationForm shadow-lg bg-light my-5">
      <figure className="AuthenticationForm-logo">
        <img src={"data:image/png;base64,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"} alt="logo" className="img-fluid" />
      </figure>
      <form onSubmit={action}>
        {pathname === "/signup" && (
          <div className="input-group">
            <label htmlFor="name"></label>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className=""
            />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="email"></label>
          <input
            required
            type="email"
            name="email"
            placeholder="email"
            className=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="password"></label>
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            className=""
          />
        </div>
        {pathname === "/signup" && (
          <div className="text-end">
            <Link to={"/login"}>Already have an account?</Link>
          </div>
        )}
        {pathname === "/login" && (
          <div className="text-end">
            <Link to={"/login"}>forgot password?</Link>
          </div>
        )}
        {error && <small className="text-danger">{error.message}</small>}
        <div className="input-group">
          <MyButtonLg
            style={{
              background: "#1f2278",
              color: "white",
              width: "100%",
              padding: "10px 0",
            }}
          >
            {pathname.split("/")}
          </MyButtonLg>
        </div>
      </form>
      {/* <SocialLogin /> */}
      <div className="text-capitalize my-3 text-center">
        {pathname === "/login" && (
          <Link to={"/signup"}>don't have an account? Register</Link>
        )}
      </div>
    </div>
  );
};

export default AuthenticationForm;
