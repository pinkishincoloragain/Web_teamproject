import React from "react";
import "./App.css";
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tag: "fish" };
  }

  render() {
    // eslint-disable-next-line
    return (
      <div className="Footer" style={{ color: this.props.color }}>
        &#47;&#47;&#47; {this.props.name}{" "}
      </div>
    );
  }
}

Footer.defaultProps = {
  name: "Let's get it started",
  color: "midnightblue",
};

export default Footer;
