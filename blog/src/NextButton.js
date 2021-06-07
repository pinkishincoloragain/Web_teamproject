import React from "react";
import "./App.css";

const btnStyle = {
  display: "inline-block",
  border: "5vw solid black",
  padding: "3vw",
  cursor: "pointer",
};

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
        <div onClick={this.handleClick} style={btnStyle}>
          &gt;&gt;
          <div></div>
        </div>
      </>
    );
  }
}

Content.defaultProps = {
  color: "midnightblue",
};

export default Content;
