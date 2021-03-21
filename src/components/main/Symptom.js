import React from "react";
import "../../css/main/Symptom.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import FloatText from "../helper/FloatText";
export default function Symptom() {
  return (
    <div className="symptom">
      <div className="imageContainer">
        <img src="https://i.ibb.co/2sZ02z1/coughing-person-with-coronavirus-23-2148485525-removebg-preview.png" />
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

      <div className="sympton-container">
        <FloatText style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
          Symptoms Covid-19
        </FloatText>
        <br />
        <h3>
          <KeyboardArrowRightIcon />
          Most common symptoms:
        </h3>
        <p>
          •fever
          <br />
          •dry cough
          <br />
          •tiredness
        </p>
        <h3>
          <KeyboardArrowRightIcon /> Less common symptoms:
        </h3>
        <p>
          •aches and pains
          <br />
          •sore throat
          <br />
          •diarrhoea
          <br />
          •conjunctivitis
          <br />
          •headache
          <br />
          •loss of taste or smell
          <br />
          •a rash on skin, or discolouration of fingers or toes
        </p>
        <h3>
          <KeyboardArrowRightIcon />
          Serious symptoms:
        </h3>
        <p>
          •difficulty breathing or shortness of breath
          <br />
          •chest pain or pressure
          <br />
          •loss of speech or movement
        </p>
      </div>
    </div>
  );
}
