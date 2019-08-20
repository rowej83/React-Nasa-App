import React from "react";
import PODVideo from "./PODVideo";
import PODImage from "./PODImage";
const PODContent = props => {
  if (props.podData.length === 0) return null;
  let resultingMedia;
  if (props.podData.media_type === "video") {
    resultingMedia = <PODVideo podData={props.podData} />;
  } else {
    resultingMedia = <PODImage podData={props.podData} />;
  }
  return resultingMedia;
};

export default PODContent;
