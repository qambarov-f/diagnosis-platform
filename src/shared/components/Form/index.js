import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Styled from "./Signin.module.css"
import * as Yup from "yup";

const Signin = () => (
  <div>
    <Formik
      initialValues={{ email: "", password: "" }}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = "Zəhmət olmazsa email adressinizi qeyd edin";
      //   } else if (
      // ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }

      //   if(!errors.password) {
      //     errors.password = "";
      //   }
      //   return errors;
      // }}

      // validate={
      //   Yup.object().shape({
      //   password: Yup.string()
      //     .min(8, "Too Short!")
      //     .max(15, "Too Long!")
      //     .required("Required"),
      //   email: Yup.string().email("Invalid email").required("Required"),
      // })}

      validate={(values) => {
        const validationSchema = Yup.object().shape({
          password: Yup.string()
            .min(8, "Şifrə qısadır!")
            .max(15, "Şifrə yaxşıdır!")
            .required("Zəhmət olmazsa sifrənizi daxil edin!"),
          email: Yup.string()
            .email("Emailiniz düzgün deyil")
            .required("Zəhmət olmazsa emailinizi daxil edin!"),
        });
        try {
          validationSchema.validateSync(values, { abortEarly: false });
        } catch (errors) {
          return errors.inner.reduce((formErrors, error) => {
            return {
              ...formErrors,
              [error.path]: error.message,
            };
          }, {});
        }
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={Styled.container}>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" placeholder="Şifrə" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);


export default Signin;