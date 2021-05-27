import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//  <Spinner animation="border" variant="primary" />
//   <Spinner animation="border" variant="secondary" />
//   <Spinner animation="border" variant="success" />
//   <Spinner animation="border" variant="danger" />
//   <Spinner animation="border" variant="warning" />
//   <Spinner animation="border" variant="info" />
//   <Spinner animation="border" variant="light" />
//   <Spinner animation="border" variant="dark" />
//   <Spinner animation="grow" variant="primary" />
//   <Spinner animation="grow" variant="secondary" />
//   <Spinner animation="grow" variant="success" />
//   <Spinner animation="grow" variant="danger" />
//   <Spinner animation="grow" variant="warning" />
//   <Spinner animation="grow" variant="info" />
//   <Spinner animation="grow" variant="light" />
//   <Spinner animation="grow" variant="dark" />

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }
  render() {
    // eslint-disable-next-line
    return (
      <div className="square">
        <div className="spin"></div>
      </div>
    );
  }
}

Loading.defaultProps = {
  variant: "primary",
};

export default Loading;
