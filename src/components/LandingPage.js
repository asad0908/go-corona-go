import React from "react";
import "../css/LandingPage.css";
import Details from "./main/Details";
import Header from "./main/Header";
import Nav from "./main/Nav";
import Quote from "./main/Quote";
import Symptom from "./main/Symptom";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Nav />
      <Header />
      <Details />
      <Quote />
      <Symptom />
    </div>
  );
};

export default LandingPage;
