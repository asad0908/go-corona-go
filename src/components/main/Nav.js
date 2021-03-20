import React, { useEffect, useState } from "react";
import "../../css/main/Nav.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowNav(true);
        setScrolled(true);
      } else {
        setShowNav(false);
        setScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div
      className={`nav ${showNav ? "nav__show" : ""} ${
        showMobileNav && scrolled ? "setHeight" : ""
      }`}
    >
      <div
        onClick={() => setShowMobileNav(!showMobileNav)}
        className="nav__mobileHamburger"
      >
        {showMobileNav ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />}
      </div>
      <div className={`nav__mobile ${showMobileNav ? "showNav" : ""}`}>
        <ul>
          <li>HOME</li>
          <li>BEDS AVAILABILITY</li>
        </ul>
        <ul>
          <li>COVID VACCINES</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="nav__desktop">
        <div className="nav__left">
          <ul>
            <li>HOME</li>
            <li>BEDS AVAILABILITY</li>
          </ul>
        </div>
      </div>
      <div className="nav__logo">
        <h3>GO CORONA GO</h3>
      </div>
      <div className="nav__desktop">
        <div className="nav__right">
          <ul>
            <li>COVID VACCINES</li>
            <li>LIVE STATUS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
