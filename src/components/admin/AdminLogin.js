import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "../../css/admin/AdminLogin.css";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";
import { auth } from "../../firebase";

const AdminLogin = () => {
  const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
      height: theme.spacing(12),
      width: theme.spacing(12),
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    if (e.key === "Enter") {
      if (username.length > 0 && password.length > 0) {
        auth
          .createUserWithEmailAndPassword(username, password)
          .then(() => {
            console.log("User created");
            setUsername("");
            setPassword("");
          })
          .catch((err) => alert(err.message));
      }
    }
  };

  return (
    <div className="adminLogin">
      <div className="adminLogin__internal">
        <div className="backButtton">
          <IconButton
            onClick={() => history.push("/")}
            style={{ margin: "20px" }}
          >
            <ArrowBackIcon style={{ fill: "#fff" }} />
          </IconButton>
        </div>
        <div className="adminLogin__login">
          <Avatar
            className={classes.sizeAvatar}
            src="https://www.flaticon.com/svg/vstatic/svg/3774/3774299.svg?token=exp=1616250830~hmac=a16539fae313da986072d80b85fdcb2a"
          />
          <div className="admin__input adminLogin__username">
            <PersonIcon style={{ marginRight: "10px", fill: "#a230ed" }} />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="admin__input adminLogin__username">
            <VpnKeyIcon style={{ marginRight: "10px", fill: "#a230ed" }} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
              onKeyDown={loginUser}
            />
          </div>
        </div>
        <div className="adminLogin__footer">
          <p className="text-center">
            "Medicine cure diseases, but only docters can cure patients"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
