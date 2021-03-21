import React, { useEffect, useState } from "react";
import "../../css/beds/GetBeds.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import FloatText from "../helper/FloatText";
import Checkbox from "../helper/Checkbox";
import BedsData from "./BedsData";
import db from "../../firebase";
import FlipMove from "react-flip-move";

const GetBeds = () => {
  const history = useHistory();

  const [hospitalData, setHospitalData] = useState([]);

  useEffect(() => {
    db.collection("hospitalsData")
      .orderBy("totalBeds", "desc")
      .onSnapshot((snap) => {
        setHospitalData(snap.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    console.log(hospitalData);
  }, [hospitalData]);

  return (
    <div className="getBeds">
      <IconButton onClick={() => history.push("/")} style={{ margin: "20px" }}>
        <ArrowBackIcon style={{ fill: "#190087" }} />
      </IconButton>
      <div className="getBeds__header">
        <img
          src="https://i.ibb.co/C8F1Smd/woman-suffering-from-hard-disease-patient-life-support-doctor-hospital-flat-illustration-74855-14216.png"
          alt="bed"
        />
        <div className="getBeds__header--info">
          <FloatText style={{ fontSize: "2rem", marginBottom: "30px" }}>
            Get Live Data of Bed Availabilities.
          </FloatText>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ratione est ex a dolor iure eaque deleniti? Nobis, soluta rerum.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            id. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, cum!
          </p>
        </div>
      </div>
      <div className="checkbox__area">
        <Checkbox data="ICU" />
        <Checkbox data="NORMAL" />
        <Checkbox data="VENTILATOR" />
      </div>
      <div className="getBeds__data">
        <FlipMove typeName={null}>
          {hospitalData?.map((hos) => (
            <BedsData
              key={hos.name}
              name={hos.name}
              address={hos.address}
              contact={hos.contact}
              google={hos.googlemaps}
              generalBeds={hos.generalBeds}
              icuBeds={hos.icuBeds}
              website={hos.website}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default GetBeds;
