import React from "react";
import "../../css/helper/Checkbox.css";

const Checkbox = ({ data }) => {
  return (
    <div className="checkboxGroup">
      <input checked disabled type="checkbox" id={data} />
      <label htmlFor={data}>{data}</label>
    </div>
  );
};

export default Checkbox;
