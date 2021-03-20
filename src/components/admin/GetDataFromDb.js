import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import db from "../../firebase";

const GetDataFromDb = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    db.collection("hospitals")
      .get()
      .then((data) => setData(data.docs.map((doc) => doc.data())))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div>
      {data.map((doc) => (
        <div>
          name: {doc.name},<br /> address: {doc.address},<br />
          contact: {doc.contact}, <br /> website: {doc.website}, <br /> google:{" "}
          {doc.googlemaps}
          <br />
          <br />
        </div>
      ))}
      <button className="btn btn-danger" onClick={() => history.push("/admin")}>
        Go back
      </button>
    </div>
  );
};

export default GetDataFromDb;
