import React from "react";

const PODVideo = props => {
  let videoUrl = props.podData.url;
  videoUrl = videoUrl.replace("https://www.youtube.com/embed/", "");
  videoUrl = videoUrl.replace(/\?.*/gm, "");

  videoUrl = `https://www.youtube.com/embed/${videoUrl}`;
  return (
    <div className="podContent">
      <div className="videoWrapper">
        <iframe
          title={props.podData.title}
          src={videoUrl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <h2 className="podTitle">{props.podData.title}</h2>
      <p className="podExplanation">{props.podData.explanation}</p>
    </div>
  );
};

export default PODVideo;
