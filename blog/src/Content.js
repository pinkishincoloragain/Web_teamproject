import React from "react";
import "./App.css";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tag: "fish" };
  }
  render() {
    return (
      <div className="ContentBox" style={{ backgroundColor: this.props.color }}>
        <h2>Content</h2>
        <p> Hey! </p>
      </div>
    );
  }
}

Content.defaultProps = {
  color: "midnightblue",
};

export default Content;
