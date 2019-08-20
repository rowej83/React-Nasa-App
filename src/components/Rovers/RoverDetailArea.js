import React from "react";
// import Lightbox from "react-simple-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

let style = {};
style.image_container = {
  // alignSelf: "flex-end"
};
style.title = {
  position: "absolute",
  width: "100%",
  bottom: 10,
  padding: "10px",

  backgroundColor: "rgba(255, 255, 255, 0.5)"
};

const RoverDetailArea = props => {
  return (
    <>
      <SRLWrapper>
        <h2 className="rover-title">
          Images from <b>{props.name}</b>
        </h2>
        <div className="image_container">
          {props.images.map((imageInfo, index) => {
            return (
              <div style={style.image_container} key={index}>
                <img
                  className="rover-image"
                  src={imageInfo.img_src}
                  alt=""
                  key={index}
                  data-attribute={props.name}
                />

                <p className="camera-name">{imageInfo.camera.full_name}</p>
              </div>
            );
          })}
        </div>
      </SRLWrapper>
    </>
  );
};
export default RoverDetailArea;
