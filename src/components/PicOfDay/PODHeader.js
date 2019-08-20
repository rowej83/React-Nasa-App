import React from "react";

const PODHeader = () => {
  return (
    <>
      <h1 className="pod-title">Picture of the day</h1>
      <p className="pick-a-date">Pick a date to see pictures taken</p>
      <p className="pick-a-date" style={{ fontSize: "14px" }}>
        {" "}
        Press D to open the calender
      </p>
    </>
  );
};

export default PODHeader;
