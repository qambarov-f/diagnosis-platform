import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Styled from "./Signin.module.css";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";

// images
import atom from "../../../images/atom3d.svg";
import signPhoto from "../../../images/signin.svg";
import spiral from "../../../images/shape4.svg"
import circle from "../../../images/circle.svg";
import circleSm from "../../../images/circle.svg";
// import styled from "styled-components";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse}`,
        },
      });
    },
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.email || !values.password) {
          errors.email = "Zəhmət olmazsa email adressinizi qeyd edin!";
          errors.password = "Zəhmət olmazsa şifrənizi qeyd edin!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email adresinizi düzgün qeyd edin!";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <div className={Styled.containerDiv}>
          <Form className={Styled.container}>
            <h1 className={Styled.title}>Xoş gəlmisiniz! </h1>
            <h4 className={Styled.titlesm}>
              {" "}
              Yeni hesab lazımdır?{" "}
              <a href="/home" className={Styled.href}>
                Qeydiyyatdan keçin
              </a>
            </h4>{" "}
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={Styled.email}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={Styled.emailError}
            />
            <div className={Styled.wrapper}>
              {showPassword ? (
                <IoIosEyeOff className={Styled.icon} onClick={togglePassword} />
              ) : (
                <IoIosEye className={Styled.icon} onClick={togglePassword} />
              )}

              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Şifrə"
                className={Styled.password}
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className={Styled.passwordError}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={Styled.button}
            >
              Daxil ol
            </button>
            <a href="/password" className={Styled.forget}>
              Şifrənizi unutmusunuz?
            </a>
            <h6 className={Styled.hSix}>və ya</h6>
            <button onClick={login} className={Styled.google}>
              <FcGoogle
                size={25}
                style={{ marginRight: "20px ", opacity: 2 }}
              />
              Google ilə davam edin
            </button>
          </Form>
          <img className={Styled.atom} src={atom} alt="atom" />
          <img className={Styled.signPhoto} src={signPhoto} alt="sign" />
          <img className={Styled.spiral} src={spiral} alt="spiral" />
          <img className={Styled.circle} src={circle} alt="circle" />
          <img className={Styled.circleSm} src={circleSm} alt="circle" />
        </div>
      )}
    </Formik>
  );
};

export default Login;
