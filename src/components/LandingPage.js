import React from "react";
import "../css/LandingPage.css";
import Details from "./main/Details";
import Header from "./main/Header";
import Nav from "./main/Nav";
import Quote from "./main/Quote";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Nav />
      <Header />
      <Details />
      <Quote />
    </div>
  );
};

export default LandingPage;
