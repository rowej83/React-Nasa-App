import React from "react";

const PODImage = props => {
  return (
    <div className="podContent">
      <img
        className="podImage"
        alt="Pic of the Day"
        src={props.podData.hdurl}
      />
      <h2 className="podTitle">{props.podData.title}</h2>
      <p className="podExplanation">{props.podData.explanation}</p>
    </div>
  );
};

export default PODImage;
