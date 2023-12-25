import React, { useState, useEffect } from "react";
import "./register.css";
import {
  ManSvg,
  EmailSvg,
  VisibilityOffSvg,
  VisibilityOnSvg,
} from "../components/Svg.js";
import orangeCat from "../img/orange-cat.png";
import whiteCat from "../img/white-cat.jpg";
import { togglePasswordVisibility } from "../utils/passwordVisibility.js";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Register = () => {
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
    const form = document.getElementById("register-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
      
        let elem = e.target;
      
        let formData = {
          name: elem.name.value,
          email: elem.email.value,
          password: elem.password.value,
          repPassword: elem.repPassword.value,
        }
      
        try {
          const response = await axios.post("http://localhost:8888/catopia/register", {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            repPassword: formData.repPassword,
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          console.log(response.data);  // Выведите ответ сервера в консоль для отладки
        } catch (error) {
          console.error(error);
        }
      });
  }, [isPasswordVisible, isRepPasswordVisible]);
  return (
    <div className="register-container">
      <div className="register-img">
        <img src={orangeCat} alt="orange cat" className="orange-cat" />
        <img src={whiteCat} alt="white cat" className="white-cat" />
      </div>
      <div className="register-content">
        <h2 className="register-title">Create Account</h2>
        <form id="register-form" method="POST" className="register-form">
          <div className="register-input-container">
            <input
              name="name"
              type="text"
              placeholder="Username"
              className="register-input"
            />
            <ManSvg />
          </div>
          <div className="register-input-container">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="register-input"
            />
            <EmailSvg />
          </div>
          <div className="register-input-container">
            <input
              name="password"
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className="register-input"
            />
            <button
              className="visibility-btn"
              type="button"
              onClick={() => toggleVisibility("password", true)}
            >
              {getVisibilityIcon(true)}
            </button>
          </div>
          <div className="register-input-container">
            <input
              name="repPassword"
              id="repPassword"
              type={isRepPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className="register-input"
            />
            <button
              className="visibility-btn"
              type="button"
              onClick={() => toggleVisibility("repPassword", false)}
            >
              {getVisibilityIcon(false)}
            </button>
          </div>
          <div className="register-checkbox-container">
            <input id="checkbox" name="checkbox" type="checkbox" />
            <p className="register-checkbox-text">
              I agree with terms & conditions
            </p>
          </div>
          <button type="submit" className="register-btn">
            Sign Up
          </button>
          <p className="register-text">
            Already have an account?
            <NavLink to="/catopia/login" href="#" className="register-link link">
              &nbsp;Log In
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
