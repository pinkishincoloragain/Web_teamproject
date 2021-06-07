import React from "react";
import "./App.css";

const videoURL = "https://www.youtube.com/embed/";

const Video = (props) => {
  return (
    <div className="ContentBox">
      <iframe
        title="video"
        style={{ width: "100%", height: "100%" }}
        src={videoURL + props.video.id.videoId}
        allowFullScreen
      ></iframe>
      {/* <h2> {props.address} </h2> */}
    </div>
  );
};

export default Video;
