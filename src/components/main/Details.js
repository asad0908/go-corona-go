import React from "react";
import { useState } from "react";
import "../../css/main/Details.css";
import FloatText from "../helper/FloatText";

const Details = () => {
  const [detailsData, setDetailsData] = useState([
    {
      heading: "Live status of covid beds",
      para:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum pariatur quasi, culpa tenetur soluta iste cumque alias maxime repudiandae saepe, dolorum ullam magni. Totam ut debitis iste error ducimus tenetur!",
    },
    {
      heading: "Covid vaccine availability check",
      para:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum pariatur quasi, culpa tenetur soluta iste cumque alias maxime repudiandae saepe, dolorum ullam magni. Totam ut debitis iste error ducimus tenetur!",
    },
  ]);

  return (
    <div className="details">
      <FloatText
        style={{ fontSize: "2rem", marginTop: "50px", marginBottom: "100px" }}
      >
        Don't Worry, we got your back covered
      </FloatText>
      <div className="details__main">
        <div className="details__left">
          {detailsData.map((data) => (
            <>
              <h3 className="heading-tertiary mb-2">{data.heading}</h3>
              <p className="paragraph">{data.para}</p>
            </>
          ))}

          <a href="#" className="btn-text">
            Learn More &rarr;
          </a>
        </div>
        <div className="details__right">
          <div className="composition">
            <img
              src="https://images.pexels.com/photos/3038369/pexels-photo-3038369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="https://images.pexels.com/photos/3884140/pexels-photo-3884140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="https://images.pexels.com/photos/6097762/pexels-photo-6097762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
