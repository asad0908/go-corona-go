import React, { forwardRef } from "react";
import "../../css/beds/BedsData.css";
import RoomIcon from "@material-ui/icons/Room";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import LanguageIcon from "@material-ui/icons/Language";
import { IconButton, Tooltip } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const BedsData = forwardRef(
  ({ name, address, contact, google, generalBeds, icuBeds, website }, ref) => {
    return (
      <div ref={ref} className="bedsData">
        <div className="bedsData__left">
          <h1>{name}</h1>
          <h3>{address}</h3>
        </div>
        <div className="bedsData__middle">
          <Tooltip title="Map">
            <IconButton
              onClick={() => window.open(google)}
              style={{ color: "#fff" }}
            >
              <RoomIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact">
            <IconButton
              onClick={() =>
                `${contact.length > 0 && window.open(`tel:${contact}`)}`
              }
              style={{ color: `${contact.length > 0 ? "#fff" : "#888"}` }}
            >
              <PermContactCalendarIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Website">
            <IconButton
              onClick={() => window.open(website)}
              style={{ color: "#fff" }}
            >
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
              GENERAL: <span>{generalBeds}</span>
            </p>
            <p>
              ICU: <span>{icuBeds}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default BedsData;
