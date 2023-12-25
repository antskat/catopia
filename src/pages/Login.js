import React, { useState, useEffect } from "react";
import "./login.css";
import "./register.css";
import cats from "../img/black-and-grey-cats-img.jpg";
import {
  EmailSvg,
  VisibilityOffSvg,
  VisibilityOnSvg,
} from "../components/Svg.js";
import { togglePasswordVisibility } from "../utils/passwordVisibility.js";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepPasswordVisible, setIsRepPasswordVisible] = useState(false);

  const toggleVisibility = (inputId, isPassword) => {
    togglePasswordVisibility(inputId);

    if (isPassword) {
      setIsPasswordVisible(!isPasswordVisible);
    } else {
      setIsRepPasswordVisible(!isRepPasswordVisible);
    }
  };

  const getVisibilityIcon = (isPassword) => {
    return isPassword ? (
      isPasswordVisible ? (
        <VisibilityOnSvg />
      ) : (
        <VisibilityOffSvg />
      )
    ) : isRepPasswordVisible ? (
      <VisibilityOnSvg />
    ) : (
      <VisibilityOffSvg />
    );
  };

  useEffect(() => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      let elem = e.target;

      let formData = {
        email: elem.email.value,
        password: elem.password.value,
      };

      try {
        const response = await axios.post(
          "http://localhost:8888/catopia/login",
          {
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        console.log("Login successful");
      } catch (error) {
        console.error(error);
      }
    });
  }, [isPasswordVisible, isRepPasswordVisible]);
  return (
    <div className="login-container">
      <section className="login">
        <div className="login-content">
          <h1 className="login-title">Log In</h1>
          <form id="login-form" className="login-form">
            <div className="register-input-container">
              <input
                className="login-input"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <EmailSvg />
            </div>
            <div className="register-input-container">
              <input
                id="password"
                className="login-input"
                type="password"
                name="password"
                placeholder="Password"
              />
              <button
                className="visibility-btn"
                type="button"
                onClick={() => toggleVisibility("password", true)}
              >
                {getVisibilityIcon(true)}
              </button>
            </div>
            <div className="wrapper">
              <div className="login-checkbox-container">
                <input className="remember" type="checkbox" name="remember" />
                <p className="login-checkbox-text">Remember me</p>
              </div>
              <a className="link password-link" href="#">
                Forgot your password?
              </a>
            </div>
            <button className="submit-login-btn" type="submit">
              Login Now
            </button>
          </form>
          <span className="user-guestion">
            New User?
            <NavLink
              to="/catopia/register"
              className="link signup-link"
              href="#"
            >
              &nbsp;Sign Up
            </NavLink>
          </span>
        </div>
      </section>
      <section className="welcome">
        <h2 className="welcome-title">WELCOME TO</h2>
        <img className="welcome-img" src={cats} alt="black and grey cats" />
      </section>
    </div>
  );
};

export default Login;
