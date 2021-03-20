import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../../css/admin/AdminData.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RoomIcon from "@material-ui/icons/Room";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import LanguageIcon from "@material-ui/icons/Language";
import { Tooltip } from "@material-ui/core";
import { useSelector } from "react-redux";
import db, { auth } from "../../firebase";

const AdminData = () => {
  const history = useHistory();
  const [icuBeds, setIcuBeds] = useState(0);
  const [generalBeds, setGeneralBeds] = useState(0);

  const user = useSelector((state) => state.User.user);

  const updateBedDetails = () => {
    db.collection("hospitalsData")
      .doc(localStorage.getItem("docEmail"))
      .update({
        generalBeds: parseInt(generalBeds),
        totalBeds: parseInt(generalBeds) + parseInt(icuBeds),
      });

    db.collection("hospitalsData")
      .doc(localStorage.getItem("docEmail"))
      .update({
        icuBeds: parseInt(icuBeds),
      });

    alert("UPDATE SUCCESSFULL");
  };

  useEffect(() => {
    db.collection("hospitalsData")
      .doc(localStorage.getItem("docEmail"))
      .get()
      .then((doc) => setGeneralBeds(doc.data().generalBeds));
    db.collection("hospitalsData")
      .doc(localStorage.getItem("docEmail"))
      .get()
      .then((doc) => setIcuBeds(doc.data().icuBeds));
  }, []);

  return (
    <div className="adminData">
      <div className="adminData__internal">
        <div className="backButtton">
          <IconButton
            onClick={() => history.push("/")}
            style={{ margin: "20px" }}
          >
            <ArrowBackIcon style={{ fill: "#fff" }} />
          </IconButton>
        </div>
        <div className="adminData__left">
          <img
            src="https://i.ibb.co/ZThst65/doctor-man-Mesa-de-trabajo-1-removebg-preview.png"
            alt="docterData"
          />
          <div className="adminData__hospital">
            <h1>{user?.name}</h1>
            <div className="adminData__buttons">
              <Tooltip title="Map">
                <IconButton
                  onClick={() => window.open(user?.googlemaps)}
                  style={{ color: "#fff" }}
                >
                  <RoomIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Contact">
                <IconButton style={{ color: "#fff" }}>
                  <PermContactCalendarIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Website">
                <IconButton style={{ color: "#fff" }}>
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="adminData__right">
          <div className="admin__input adminLogin__username">
            <input
              value={icuBeds}
              onChange={(e) => setIcuBeds(e.target.value)}
              type="number"
              placeholder="ICU BEDS"
            />
          </div>
          <div className="admin__input adminLogin__username">
            <input
              value={generalBeds}
              onChange={(e) => setGeneralBeds(e.target.value)}
              type="number"
              placeholder="GENERAL BEDS"
            />
          </div>
          <div className="admin__button">
            <button onClick={updateBedDetails} className="btn btn-danger">
              UPDATE
            </button>
          </div>
          <button onClick={() => auth.signOut()}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

export default AdminData;

// db.collection("hospitalsData")
//       .get()
//       .then((doc) => {
//         doc.docs.map((docData) => {
//           db.collection("hospitalsData")
//             .doc(docData.id)
//             .update({
//               icuBeds: 0,
//               generalBeds: 0,
//               totalBeds: parseInt(icuBeds) + parseInt(generalBeds),
//             })
//             .then(() => {
//               console.log(docData.id, " updated");
//             })
//             .catch((err) => alert(err.message));
//         });
//       });
