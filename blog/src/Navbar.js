import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const style1 = {
  background: "midnightblue",
};
const style2 = {
  background: "#F7E600",
};
const style4 = {
  background: "#2DB400",
};
const style5 = {
  background: "#C4302B",
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
  const [home, setHome] = useState("H");
  const [map, setMap] = useState("M");
  const [naver, setNaver] = useState("N");
  const [you, setYou] = useState("Y");
  const [comment, setComment] = useState("C");

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <div id="navtext">Go!</div>
        <ul className="nav-items">
          <li
            className="nav-item"
            style={style1}
            onMouseOver={(event) => {
              setHome("HOME");
            }}
            onMouseOut={(event) => {
              setHome("H");
            }}>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}>
              <p className="v-text">{home}</p>
            </Link>
          </li>
          <li
            className="nav-item"
            style={style2}
            onMouseOver={(event) => {
              setMap("Map");
            }}
            onMouseOut={(event) => {
              setMap("M");
            }}>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}>
              <p className="v-text">{map}</p>
            </Link>
          </li>
          <li
            className="nav-item"
            style={style4}
            onMouseOver={(event) => {
              setNaver("Naver");
            }}
            onMouseOut={(event) => {
              setNaver("N");
            }}>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}>
              <p className="v-text">{naver}</p>
            </Link>
          </li>
          <li
            className="nav-item-2"
            style={style5}
            onMouseOver={(event) => {
              setYou("Youtube");
            }}
            onMouseOut={(event) => {
              setYou("Y");
            }}>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}>
              <p className="v-text">{you}</p>
            </Link>
          </li>
          <li
            className="nav-item-2"
            style={style6}
            onMouseOver={(event) => {
              setComment("Comment");
            }}
            onMouseOut={(event) => {
              setComment("C");
            }}>
            <Link
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}>
              <p className="v-text">{comment}</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
