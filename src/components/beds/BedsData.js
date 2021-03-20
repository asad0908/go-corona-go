import React from "react";
import "../../css/beds/BedsData.css";
import RoomIcon from "@material-ui/icons/Room";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import LanguageIcon from "@material-ui/icons/Language";
import { IconButton, Tooltip } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const BedsData = () => {
  return (
    <div className="bedsData">
      <div className="bedsData__left">
        <h1>Lilavati Hospital</h1>
        <h3>
          A - 791, Bandra Reclamation Rd, Muslim Nagar, Kumbhar Wada, Bandra
          West, Mumbai, Maharashtra 400017
        </h3>
      </div>
      <div className="bedsData__middle">
        <Tooltip title="Map">
          <IconButton style={{ color: "#fff" }}>
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
      <div className="bedsData__right">
        <h3>
          <EventAvailableIcon style={{ marginRight: "15px" }} />
          Beds Availability
        </h3>
        <div className="bedAvailabilit">
          <p>
            GENERAL: <span>10</span>
          </p>
          <p>
            ICU: <span>0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BedsData;
