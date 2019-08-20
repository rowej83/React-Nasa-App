import React from "react";
import RoverDetailArea from "./RoverDetailArea";

const RoverDetailFactory = props => {
  return (
    <>
      {props.imageArray.filter(image => {
        return image.rover.name === props.name;
      }).length > 0 && (
        <RoverDetailArea
          name={props.name}
          images={props.imageArray.filter(image => {
            return image.rover.name === props.name;
          })}
        />
      )}
    </>
  );
};

export default RoverDetailFactory;
