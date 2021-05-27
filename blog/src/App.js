import React from "react";
import Header from "./Header";
import Content from "./Content";
import Descript from "./Descript";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Descript />
          <div class="Contentdiv">
            <Content />
          </div>
        </div>
        <div>
          <Descript />
          <div class="Contentdiv">
            <Content />
          </div>
        </div>
        <div>
          <Descript />
          <div class="Contentdiv">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
