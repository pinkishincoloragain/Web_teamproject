import React from "react";
import "./App.css";

import p1 from "./logos/1.png";
import p2 from "./logos/2.png";
import p3 from "./logos/3.png";
import p4 from "./logos/4.png";
import p5 from "./logos/5.png";
import p6 from "./logos/6.png";
import p7 from "./logos/7.png";
import p8 from "./logos/8.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tag: "fish" };
  }

  render() {
    // eslint-disable-next-line
    return (
      <div className="Footer" style={{ color: this.props.color }}>
        &#47;&#47;&#47; {this.props.name}
        <div className="Logosholder">
          <img className="logos" src={p1} alt="p1" border="0"></img>
          <img className="logos" src={p2} alt="p2" border="0"></img>
          <img className="logos" src={p3} alt="p3" border="0"></img>
          <img className="logos" src={p4} alt="p4" border="0"></img>
          <img className="logos" src={p5} alt="p5" border="0"></img>
          <img className="logos" src={p6} alt="p6" border="0"></img>
          <img className="logos" src={p7} alt="p7" border="0"></img>
          <img className="logos" src={p8} alt="p8" border="0"></img>
        </div>
        <h2 id="copyright">
          Copyright 2021. 쓰리쓰리마쓰리 All Rights Reserved.
        </h2>
      </div>
    );
  }
}

Footer.defaultProps = {
  name: "Used Techniques",
  color: "midnightblue",
};

export default Footer;
