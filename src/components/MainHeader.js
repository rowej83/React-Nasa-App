import React from "react";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <>
      <img
        src="https://api.nasa.gov/images/logo.png"
        style={{ width: "150px" }}
        alt="Nasa Logo"
      />
      <div style={{ paddingTop: "20px" }}>
        <NavLink
          className="nav-link"
          exact
          to="/"
          activeStyle={{ fontSize: "22px" }}
        >
          Rovers
        </NavLink>
        <NavLink
          to="/pod"
          className="nav-link"
          activeStyle={{ fontSize: "22px" }}
        >
          Pic of the Day
        </NavLink>
      </div>
    </>
  );
};

export default MainHeader;
