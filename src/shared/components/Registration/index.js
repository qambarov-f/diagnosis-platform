import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Styled from "./Registration.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import * as Yup from 'yup';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(
      "Zəhmət olmazsa ad və soyadınızı qeyd edin!"
    ),
    region: Yup.string().required("Zəhmət olmazsa bölgənizi qeyd edin!"),
    dateOfBirth: Yup.string()
      .required("Zəhmət olmazsa doğum gününüzü qeyd edin!")
      .matches(
        /^\d{2}.\d{2}.\d{4}$/,
        "Zəhmət olmazsa düzgün formatta qeyd edin (Məs. 17.08.1999)!"
      ),
    email: Yup.string()
      .email("Zəhmət olmazsa doğru email adresini qeyd edin!")
      .required("Zəhmət olmazsa email adresinizi qeyd edin!"),
    contact: Yup.string()
      .matches(
        /^\+994\d{9}$/,
        "Zəhmət olmazsa doğru formatda əlaqə nömrəsini qeyd edin (Məs.+994552222222)!"
      )
      .required("Zəhmət olmazsa əlaqə nömrənizi qeyd edin."),
    password: Yup.string().required("Zəhmət olmazsa şifrənizi qeyd edin!"),
  });

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
    <>
      <div className={Styled.mainDiv}>
        <h1 className={Styled.title}>Qeydiyatdan keçin</h1>
        <h2 className={Styled.subtitle}>
          Hesabınız var? 
          <Link to="/daxil-olmaq" className={Styled.login}>
            Daxil olun
          </Link>
        </h2>

        <Formik
          initialValues={{
            fullName: "",
            region: "",
            dateOfBirth: "",
            email: "",
            contact: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              navigate("/daxil-olmaq");
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <div>
              <Form className={Styled.formik}>
                <div>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Adınız və Soyadınız"
                    className={Styled.fullName}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className={Styled.error}
                  />
                </div>

                <div>
                  <Field
                    type="text"
                    name="region"
                    placeholder="Yaşadığınız ərazi"
                    className={Styled.region}
                  />
                  <ErrorMessage
                    name="region"
                    component="div"
                    className={Styled.error}
                  />
                </div>

                <div>
                  <Field
                    type="text"
                    name="dateOfBirth"
                    placeholder="Doğum tarixi"
                    className={Styled.dateOfBirth}
                  />
                  <ErrorMessage
                    name="dateOfBirth"
                    component="div"
                    className={Styled.error}
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={Styled.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={Styled.error}
                  />
                </div>
                <div>
                  <Field
                    type="tel"
                    name="contact"
                    placeholder="Əlaqə nömrəsi"
                    className={Styled.contact}
                  />
                  <ErrorMessage
                    name="contact"
                    component="div"
                    className={Styled.error}
                  />
                </div>

                <div className={Styled.wrapper}>
                  {showPassword ? (
                    <IoIosEyeOff
                      className={Styled.icon}
                      onClick={togglePassword}
                    />
                  ) : (
                    <IoIosEye
                      className={Styled.icon}
                      onClick={togglePassword}
                    />
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
                  className={Styled.error}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={Styled.button}
                >
                  Qeydiyatdan keçin
                </button>
                <h6 className={Styled.hSix}>və ya</h6>
                <button onClick={login} className={Styled.google}>
                  <FcGoogle
                    size={25}
                    style={{ marginRight: "20px ", opacity: 2 }}
                  />
                  Google ilə davam edin
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );

}


export default Registration;
