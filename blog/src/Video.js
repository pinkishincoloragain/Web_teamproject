import React from "react";
import "./App.css";

const videoURL = "https://www.youtube.com/embed/";
let word;

const Video = (props) => {
  word = props.address.split(".");
  return (
    <div id="videobox" className="ContentBox">
      {/* <div style={{ width: "50vw", height: "10vh" }}> */}
      <div>
        <div>
          <h2 className="WordTitle" id="title0">
            #{word[0]}
          </h2>
          <iframe
            className="vidFrame-1"
            title="video"
            style={{ width: "60vw", height: "50vh" }}
            src={videoURL + props.first.id.videoId}
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h2 className="WordTitle" id="title1">
            #{word[1]}
          </h2>
          <iframe
            className="vidFrame-2"
            title="video"
            id="middleIframe"
            style={{ width: "60vw", height: "50vh" }}
            src={videoURL + props.second.id.videoId}
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h2 className="WordTitle" id="title2">
            #{word[2]}
          </h2>
          <iframe
            className="vidFrame-3"
            title="video"
            style={{ width: "60vw", height: "50vh" }}
            src={videoURL + props.third.id.videoId}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
