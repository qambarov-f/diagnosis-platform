import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Styled from "./Registration.module.css";
class Registration extends Component {

    render() {
        return (
            <>
                <h1>Registration</h1>

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
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (

                        <div>
                            <Form
                            className
                            >
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
                                    //   className={Styled.emailError}
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
                                    //   className={Styled.emailError}
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
                                        className
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
                                        className
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
                                        className
                                    />
                                </div>

                                <div
                                className
                                >
                                    {/* {showPassword ? (
                <IoIosEyeOff className={Styled.icon} onClick={togglePassword} />
            ) : (
                <IoIosEye className={Styled.icon} onClick={togglePassword} />
              )} */}
                                    <Field
                                        type={"password"}
                                        name="password"
                                        placeholder="Şifrə"
                                        className={Styled.password}
                                    />
                                </div>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className
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

            </>

        );
    }
}

export default Registration;