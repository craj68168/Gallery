import React, { useEffect, useState, useContext, Fragment } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import { AppContext } from "../store/AppContext";

const Header = () => {
  const history = useHistory();
  const [loggedIn, user] = useContext(AppContext);
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/login");
      });
  };
  return (
    <nav className="bg-gray-600 py-4 flex justify-between">
      <ul className="flex text-white px-3 ">
        <li className="mx-5">
          <NavLink to="/" exact activeClassName="underline text-blue-400">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            exact
            activeClassName="underline text-blue-400"
          >
            Gallery
          </NavLink>
        </li>
      </ul>
      <ul className="flex text-white px-3 justify-between">
        {loggedIn ? (
          <li className="mx-4">
            <NavLink
              onClick={handleLogout}
              to="/login"
              exact
              activeClassName="underline text-blue-400"
            >
              Logout
            </NavLink>
          </li>
        ) : (
          <Fragment>
            <li className="mx-4">
              <NavLink
                to="/login"
                exact
                activeClassName="underline text-blue-400"
              >
                Login
              </NavLink>
            </li>
            <li className=" mx-4">
              <NavLink
                to="/signup"
                exact
                activeClassName="underline text-blue-400"
              >
                Signup
              </NavLink>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Header;
