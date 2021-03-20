import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminData from "./components/admin/AdminData";
import GetDataFromDb from "./components/admin/GetDataFromDb";
import LandingPage from "./components/LandingPage";
import GetBeds from "./components/beds/GetBeds";
import AdminLogin from "./components/admin/AdminLogin";
import { useDispatch } from "react-redux";
import db, { auth } from "./firebase";
import { loginUser, logoutUser } from "./components/redux/users/userActions";

const BedManagementApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //userLoggedIn
        db.collection("hospitalsData")
          .doc(localStorage.getItem("docEmail"))
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch(loginUser(doc.data()));
            }
          });
      } else {
        dispatch(logoutUser());
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/check">
          <GetDataFromDb />
        </Route>
        <Route path="/beds">
          <GetBeds />
        </Route>
        <Route path="/hospital/login">
          <AdminLogin />
        </Route>
        <Route path="/admin/beds">
          <AdminData />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default BedManagementApp;
