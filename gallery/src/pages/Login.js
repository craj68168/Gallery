import React, { useState } from "react";
import firebase from "../config/firebase";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };
  const handleClick = e => {
    e.preventDefault();
    if (loading)
      // if loading is true means while loading if click than return nothing
      return;
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(data => {
        setLoading(false);
        setForm({ email: "", password: "" });
        history.push("/");
      })
      .catch(e => {
        setError(e.message);
        setLoading(false);
        setForm({ email: "", password: "" });
      });
  };

  return (
    <motion.div
      className="flex h-screen"
      initial={{ x: 400 }}
      animate={{ x: 0 }}
    >
      <div
        className="m-auto bg-gray-400 px-10 py-5"
        style={{
          borderRadius: "10px",
          border: "2px solid black",
          width: "40%",
        }}
      >
        {error ? <p className="text-center text-red-800">{error}</p> : ""}
        <h1
          className="text-center "
          style={{
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: "30px",
            textDecoration: "underline",
          }}
        >
          Login
        </h1>
        <form onSubmit={handleClick}>
          <div>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="Enter Email"
              style={{
                borderRadius: "4px",
                padding: "5px",
                outline: "none",
                width: "100%",
              }}
            />
          </div>
          <div className="py-4">
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={form.password}
              placeholder="Enter Password"
              style={{
                borderRadius: "4px",
                padding: "5px",
                outline: "none",
                width: "100%",
              }}
            />
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
                "Signin"
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
