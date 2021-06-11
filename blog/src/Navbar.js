import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const style1 = {
  background: "midnightblue",
};
const style2 = {
  background: "#F7E600",
};
const style3 = {
  background: "#543E47",
};
const style4 = {
  background: "#2DB400",
};
const style5 = {
  background: "#C4302B",
};
const style6 = {
  background: "#E2DFD8",
};

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          Move
          <ul className="nav-items">
            <li className="nav-item" style={style1}>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                {/* Home */}H
              </Link>
            </li>
            <li className="nav-item" style={style2}>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                {/* Map */}M
              </Link>
            </li>
            <li className="nav-item" style={style4}>
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                {/* News */}N
              </Link>
            </li>
            <li className="nav-item" style={style5}>
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                {/* Youtube */}Y
              </Link>
            </li>
            <li className="nav-item" style={style6}>
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                {/* Comments */}C
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
