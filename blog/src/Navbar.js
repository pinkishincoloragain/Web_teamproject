import React, { useState } from "react";
import { Link } from "react-scroll";

const style1 = {
  background: "midnightblue",
  color: "yellow",
};
const style2 = {
  background: "#F7E600",
  color: "black",
};
const style4 = {
  background: "#2DB400",
  color: "black",
};
const style5 = {
  background: "#C4302B",
  color: "black",
};
const style6 = {
  background: "#E2DFD8",
  color: "black",
};

export default function Navbar() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // Nav: { home: "H", map: "M", naver: "N", youtube: "Y", comment: "C" },
  //     nav: ["H", "M", "N", "Y", "C"],
  //   };
  // }
  const [home, setHome] = useState("홈");
  const [map, setMap] = useState("지");
  const [naver, setNaver] = useState("네");
  const [you, setYou] = useState("유");
  const [comment, setComment] = useState("댓");

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <div id="navtext">가!</div>
        <ul className="nav-items">
          <li
            className="nav-item"
            style={style1}
            onMouseOver={(event) => {
              setHome("홈화면");
            }}
            onMouseOut={(event) => {
              setHome("홈");
            }}
          >
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              <p className="v-text">{home}</p>
            </Link>
          </li>
          <li
            className="nav-item"
            style={style2}
            onMouseOver={(event) => {
              setMap("지도");
            }}
            onMouseOut={(event) => {
              setMap("지");
            }}
          >
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              <p className="v-text">{map}</p>
            </Link>
          </li>
          <li
            className="nav-item"
            style={style4}
            onMouseOver={(event) => {
              setNaver("네이버");
            }}
            onMouseOut={(event) => {
              setNaver("네");
            }}
          >
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              <p className="v-text">{naver}</p>
            </Link>
          </li>
          <li
            className="nav-item"
            style={style5}
            onMouseOver={(event) => {
              setYou("유튜브");
            }}
            onMouseOut={(event) => {
              setYou("유");
            }}
          >
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              <p className="v-text">{you}</p>
            </Link>
          </li>
          <li
            className="nav-item"
            style={style6}
            onMouseOver={(event) => {
              setComment("댓글");
            }}
            onMouseOut={(event) => {
              setComment("댓");
            }}
          >
            <Link
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              <p className="v-text">{comment}</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
