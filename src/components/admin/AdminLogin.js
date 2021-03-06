import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../../css/admin/AdminLogin.css";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";

const AdminLogin = () => {
  const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
      height: theme.spacing(12),
      width: theme.spacing(12),
    },
  }));

  const user = useSelector((state) => state.User.user);

  const classes = useStyles();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    if (e.key === "Enter") {
      if (username.length > 0 && password.length > 0) {
        auth
          .signInWithEmailAndPassword(username, password)
          .then(() => {
            localStorage.setItem("docEmail", username);
            history.push("/admin/beds");

            setUsername("");
            setPassword("");
          })
          .catch((err) => alert(err.message));
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        history.push("/admin/beds");
      }
    }, 100);
  }, [user]);

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
            src="https://www.flaticon.com/svg/vstatic/svg/607/607414.svg?token=exp=1616289997~hmac=0d5b399f9830bded353c1d63aa0e2748"
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
