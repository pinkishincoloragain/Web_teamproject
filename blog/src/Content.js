import React, { useState } from "react";
import "./App.css";
import Loading from "./Loading";

function Content(props) {
  // const [address, setAddress] = useState("///당신의 위치를 고르세요!");

  return (
    <div className="ContentBox" style={{ backgroundColor: props.color }}>
      <h2>Content</h2>
      <p> Hey! </p>
      {/* <p>{props.address}</p> */}
      <Loading />
    </div>
  );
}

Content.defaultProps = {
  color: "midnightblue",
};

export default Content;
