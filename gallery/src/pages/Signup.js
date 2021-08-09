import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import firebase from "../config/firebase";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  return (
    <motion.div initial={{ x: -400 }} animate={{ x: 0 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value, formikBag) => {
          setLoading(true);
          firebase
            .auth()
            .createUserWithEmailAndPassword(value.email, value.password)
            .then(res => {
              setLoading(false);
              history.replace("/");
            })
            .catch(e => {
              setLoading(false);
              formikBag.setFieldError("email", e.message);
            });
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Email is required")
            .email("Invalid email"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be atleast 6 character"),
        })}
      >
        <div className="flex h-screen">
          <div
            className="m-auto bg-gray-400 px-10 py-5"
            style={{
              borderRadius: "10px",
              border: "2px solid black",
              width: "40%",
            }}
          >
            <h1
              className="text-center "
              style={{
                marginBottom: "20px",
                fontWeight: "bold",
                fontSize: "30px",
                textDecoration: "underline",
              }}
            >
              Signup
            </h1>
            <Form>
              <div>
                <Field
                  name="email"
                  type="text"
                  placeholder="Enter Email"
                  style={{
                    borderRadius: "4px",
                    padding: "5px",
                    outline: "none",
                    width: "100%",
                  }}
                />
                {/* <input
                type="text"
                placeholder="Enter Email"
                // name="email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                {...formik.getFieldProps("email")}
                style={{
                  borderRadius: "4px",
                  padding: "5px",
                  outline: "none",
                  width: "100%",
                }}
              /> */}
                <ErrorMessage name="email" />
                {/* {formik.touched.email && formik.errors.email ? (
                <p>{formik.errors.email}</p>
              ) : null} */}
              </div>
              <div className="py-4">
                <Field
                  name="password"
                  type="text"
                  placeholder="Enter Password"
                  style={{
                    borderRadius: "4px",
                    padding: "5px",
                    outline: "none",
                    width: "100%",
                  }}
                />
                <ErrorMessage name="password" />
              </div>
              <div>
                <button
                  style={{
                    background: "green",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  className="p-3 text-white w-2/3 text-center"
                >
                  {loading ? (
                    <i className="fas fa-circle-notch fa-spin"></i>
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Formik>
    </motion.div>
  );
};

export default Signup;
