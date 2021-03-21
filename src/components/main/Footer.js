import React from "react";
import "../../css/main/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Designed & Developed by</h1>
      <hr />
      <h3>
        {" "}
        <span
          onClick={() => window.open("https://www.instagram.com/khanhamid101/")}
          className="nameFooter"
        >
          Hamidullah Khan
        </span>{" "}
        &{" "}
        <span
          onClick={() =>
            window.open("https://www.linkedin.com/in/asad-memon-951b00203/")
          }
          className="nameFooter"
        >
          Asad Memon
        </span>
      </h3>
      <p>{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
