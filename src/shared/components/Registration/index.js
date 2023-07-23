import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Styled from "./Registration.module.css";
import { useNavigate } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from "axios";

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);

    
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const navigate = useNavigate();



    return (
        <>
            <div className={Styled.mainDiv}>

                <h1 className={Styled.title}>Qeydiyatdan keçin</h1>
                <h2 className={Styled.subtitle}>Hesabınız var? Daxil olun </h2>

                <Formik
                    initialValues={{ fullName: "", region: "", dateOfBirth: "", email: "", contact: "", password: "", }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.fullName || !values.region || !values.dateOfBirth || !values.email || !values.contact || !values.password) {
                            errors.fullName = "Zəhmət olmazsa ad və soyadınızı qeyd edin!";
                            errors.region = "Zəhmət olmazsa bölgənizi qeyd edin!";
                            errors.dateOfBirth = "Zəhmət olmazsa doğum gününüzü qeyd edin!";
                            errors.email = "Zəhmət olmazsa email adresinizi doğru qeyd edin!";
                            errors.contact = "Zəhmət olmazsa əlaqə nömrəsi qeyd edin!";
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
                            navigate("/daxil-olmaq");
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (

                        <div>
                            <Form
                                className
                            >
                                <div >
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
                                        type="text"
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

                                <div
                                    className
                                >
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
                                    className={Styled.error}
                                />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={Styled.button}
                                >
                                    Daxil ol
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

{/* <button onClick={gRegistration} className={Styled.google}>
    <FcGoogle
        size={25}
        style={{ marginRight: "20px ", opacity: 2 }}
    />
    Google ilə davam edin
</button> */}

 // const gRegistration = useGoogleLogin({
    //     onSuccess: (tokenResponse) => {
    //         axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    //             headers: {
    //                 Authorization: `Bearer ${tokenResponse}`,
    //             },
    //         });
    //     },
    // });