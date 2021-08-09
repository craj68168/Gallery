import React from "react";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Gallery from "../../pages/Gallery";
import Signup from "../../pages/Signup";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: null,
  },
  {
    exact: true,
    path: "/login",
    protected: "guest",
    component: () => <Login />,
  },
  {
    exact: true,
    path: "/gallery",
    protected: "auth",
    component: () => <Gallery />,
  },
  {
    exact: true,
    path: "/signup",
    protected: "guest",
    component: () => <Signup />,
  },
];
