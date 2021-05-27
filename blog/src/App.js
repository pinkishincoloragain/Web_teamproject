import React from "react";
import Header from "./Header";
import Content from "./Content";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh",
          }}>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
