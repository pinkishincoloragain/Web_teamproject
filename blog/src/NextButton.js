import React from "react";
import "./App.css";

class NextButton extends React.Component {
  state = {
    select: false,
  };
  handleClick = () => {
    this.setState((state) => ({
      select: !state.select,
    }));
  };

  render() {
    return (
      <>
        <div onClick={this.handleClick} style={btnStyle}></div>
      </>
    );
  }
}

Content.defaultProps = {
  color: "midnightblue",
};

export default Content;
