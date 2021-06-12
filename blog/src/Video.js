import React from "react";
import "./App.css";

const videoURL = "https://www.youtube.com/embed/";
let word;

const Video = (props) => {
  word = props.address.split(".");
  return (
    <div className="ContentBox">
      {/* <div style={{ width: "50vw", height: "10vh" }}> */}
      <div style={{ width: "80vw" }}>
        <h2 className="WordTitle" id="title0">
          #{word[0]}
        </h2>
        <h2 className="WordTitle" id="title1">
          #{word[1]}
        </h2>
        <h2 className="WordTitle" id="title2">
          #{word[2]}
        </h2>
      </div>
      <iframe
        className="vidFrame"
        title="video"
        style={{ width: "25vw", height: "60vh" }}
        src={videoURL + props.first.id.videoId}
        allowFullScreen></iframe>
      <iframe
        className="vidFrame"
        title="video"
        id="middleIframe"
        style={{ width: "25vw", height: "60vh" }}
        src={videoURL + props.second.id.videoId}
        allowFullScreen></iframe>
      <iframe
        className="vidFrame"
        title="video"
        style={{ width: "25vw", height: "60vh" }}
        src={videoURL + props.third.id.videoId}
        allowFullScreen></iframe>
    </div>
  );
};

export default Video;
