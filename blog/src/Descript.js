import React from "react";
import "./App.css";
class Descript extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    // eslint-disable-next-line
    return <h1 className="Welcome">/// Let's get it started</h1>;
  }
}

export default Descript;
