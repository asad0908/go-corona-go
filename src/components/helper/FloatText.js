import React from "react";
import "../../css/helper/FloatText.css";

const FloatText = (props) => {
  return (
    <h2 style={props.style} className="heading-secondary">
      {props.children}
    </h2>
  );
};

export default FloatText;
