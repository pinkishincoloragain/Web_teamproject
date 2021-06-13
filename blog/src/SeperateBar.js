import React from "react";
import "./App.css";

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tag: "fish" };
  }
  render() {
    return (
      <div>
        <div
          className="Bar"
          style={{ backgroundColor: this.props.color }}></div>
      </div>
    );
  }
}

Bar.defaultProps = {
  color: "midnightblue",
};

export default Bar;
