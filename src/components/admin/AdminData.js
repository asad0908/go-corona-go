import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import "../../css/admin/AdminData.css";
import db from "../../firebase";

const AdminData = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [google, setGoogle] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
  const history = useHistory();

  const addData = () => {
    if (name.length > 2) {
      db.collection("hospitals")
        .doc(name)
        .set({
          name: name,
          address: address,
          googlemaps: google,
          contact: contact,
          website: website,
        })
        .then(() => {
          setName("");
          setContact("");
          setAddress("");
          setWebsite("");
          setGoogle("");
          alert("Hospital added");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div className="adminData">
      <h2 className="text-center mb-5">Hospital Add</h2>
      <div className="adminData__addHospitals">
        <div className="hospital__add">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="hospital name"
          />
          <input
            value={address}
            type="text"
            placeholder="hospital full address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            value={google}
            type="text"
            placeholder="google map location"
            onChange={(e) => setGoogle(e.target.value)}
          />
          <input
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            type="text"
            placeholder="contact number"
          />
          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            type="text"
            placeholder="website"
          />
          <button onClick={addData} className="btn btn-primary">
            Add location
          </button>
          <button
            onClick={() => history.push("/check")}
            className="mt-3 btn btn-secondary"
          >
            Check Previous data
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminData;
