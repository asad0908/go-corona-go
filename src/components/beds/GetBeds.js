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
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import Fuse from "fuse.js";

const GetBeds = () => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  const [hospitalData, setHospitalData] = useState([]);
  const [searchedData, setSearchedData] = useState(hospitalData);

  useEffect(() => {
    db.collection("hospitalsData")
      .orderBy("totalBeds", "desc")
      .onSnapshot((snap) => {
        setHospitalData(snap.docs.map((doc) => doc.data()));
      });
  }, []);

  const fuse = new Fuse(hospitalData, {
    includeScore: true,
    keys: ["name"],
    minMatchCharLength: 1,
  });

  const searchHospital = (e) => {
    setSearchInput(e.target.value);

    //search query

    const result = fuse.search(e.target.value);
    setSearchedData(result);
  };

  useEffect(() => {
    setSearchedData(hospitalData);
  }, [hospitalData]);

  useEffect(() => {
    console.log(searchedData);
  }, [searchedData]);

  return (
    <div className="getBeds">
      <IconButton onClick={() => history.push("/")} style={{ margin: "20px" }}>
        <ArrowBackIcon style={{ fill: "#190087" }} />
      </IconButton>
      <div className="getBeds__search">
        <LocalHospitalIcon style={{ fill: "#fff", marginRight: "10px" }} />
        <input
          value={searchInput}
          onChange={searchHospital}
          type="text"
          placeholder="search hospital"
        />
      </div>
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
          {searchInput.length > 0
            ? searchedData.map((hos) => (
                <BedsData
                  key={hos.item?.name}
                  name={hos.item?.name}
                  address={hos.item?.address}
                  contact={hos.item?.contact}
                  google={hos.item?.googlemaps}
                  generalBeds={hos.item?.generalBeds}
                  icuBeds={hos.item?.icuBeds}
                  website={hos.item?.website}
                />
              ))
            : hospitalData?.map((hos) => (
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
