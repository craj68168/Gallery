import { useState, useEffect } from "react";
import firebase from "../../config/firebase";

const useCustomContext = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(data => {
      if (data) {
        setUser(data);
        setLoggedIn(true);
        setLoading(false);
      } else {
        setLoggedIn(false);
        setUser({});
        setLoading(false);
      }
    });
  }, []);
  return [loggedIn, user, loading];
};

export default useCustomContext;
