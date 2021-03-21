import React from "react";
import "../css/LandingPage.css";
import Details from "./main/Details";
import Footer from "./main/Footer";
import Header from "./main/Header";
import Nav from "./main/Nav";
import Quote from "./main/Quote";
import Symptom from "./main/Symptom";
import Vaccines from "./main/Vaccines";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Nav />
      <Header />
      <Details />
      <Quote />
      <Symptom />
      <Vaccines />
      <Footer />
    </div>
  );
};

export default LandingPage;
