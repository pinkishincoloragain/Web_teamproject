import React from "react";
import "./App.css";
class Descript extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tag: "fish" };
  }
  render() {
    // eslint-disable-next-line
    return (
      <h1 className="Descript" style={{ color: this.props.color }}>
        /// {this.props.name}{" "}
      </h1>
    );
  }
}

Descript.defaultProps = {
  name: "Let's get it started",
  color: "midnightblue",
};

export default Descript;
