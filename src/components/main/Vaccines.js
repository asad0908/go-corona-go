import React from "react";
import "../../css/main/Vaccines.css";
import FloatText from "../helper/FloatText";

const Vaccines = () => {
  return (
    <div className="vaccines">
      <div className="vaccines__left">
        <FloatText style={{ fontSize: "2.5rem", marginBottom: "50px" }}>
          Vaccines Near Me
        </FloatText>
        <div className="vaccines__details">
          <p>
            As per the Central government's announcement, people aged above 60
            years and those over 45 with comorbidities will be covered in the
            vaccination programme from March 1.
          </p>
          <p>
            It should be noted that the COVID-19 vaccine will be administered
            free of cost at government hospitals while people will need to pay
            for vaccine shots at private hospitals.
          </p>
        </div>
        <a
          href=""
          onClick={() =>
            window.open(
              "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"
            )
          }
          className="btn-text"
        >
          Learn More &rarr;
        </a>
      </div>
      <div className="vaccines__right">
        <img
          src="https://i.ibb.co/j6r6MQR/flat-hand-drawn-doctor-injecting-vaccine-patient-23-2148855954-removebg-preview-1.png"
          alt="vaccines"
        />
      </div>
    </div>
  );
};

export default Vaccines;
