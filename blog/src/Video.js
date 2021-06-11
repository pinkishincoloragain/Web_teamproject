import React from "react";
import "./App.css";

const videoURL = "https://www.youtube.com/embed/";
let word;

const Video = (props) => {
  word = props.address.split(".");
  return (
    <div className="ContentBox">
      <div style={{ width: "100%", height: "10%" }}>
        <h2 className="WordTitle">#{word[0]}</h2>
        <h2 className="WordTitle">#{word[1]}</h2>
        <h2 className="WordTitle">#{word[2]}</h2>
      </div>
      <iframe
        title="video"
        style={{ width: "33%", height: "90%" }}
        src={videoURL + props.first.id.videoId}
        allowFullScreen
      ></iframe>
      <iframe
        title="video"
        style={{ width: "33%", height: "90%" }}
        src={videoURL + props.second.id.videoId}
        allowFullScreen
      ></iframe>
      <iframe
        title="video"
        style={{ width: "33%", height: "90%" }}
        src={videoURL + props.third.id.videoId}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
