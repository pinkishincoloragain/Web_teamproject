import React from "react";
import "./App.css";
import w3w from "./logos/w3w.png";
import kakao from "./logos/kakaomap.png";
import x from "./logos/x.png";

class Header extends React.Component {
  render() {
    // eslint-disable-next-line
    return (
      <div>
        <h1 className="Header">
          <p className="typing">지금. 당신이. 서 있는 곳.</p>
        </h1>
        <div className="imgholder">
          <img className="Logo1" src={w3w} alt="w3w"></img>
          <img className="xImg" src={x} alt="x"></img>
          <img className="Logo2" src={kakao} alt="kakao"></img>
        </div>
      </div>
    );
  }
}

export default Header;
