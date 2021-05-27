import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <h1>let's get it started {this.datte}</h1>;
  }
}

export default Welcome;
