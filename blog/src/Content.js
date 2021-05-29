import React from "react";
import "./App.css";
import Loading from "./Loading";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: null };
  }
  render() {
    return (
      <div className="ContentBox" style={{ backgroundColor: this.props.color }}>
        <h2>Content</h2>
        <p> Hey! </p>
        <p>{this.props.address}</p>
        <Loading />
      </div>
    );
  }
}

Content.defaultProps = {
  color: "midnightblue",
  address: "",
};

export default Content;
