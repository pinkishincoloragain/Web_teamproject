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
          <Descript name="Let's get it started" color="red" />
          <div class="Contentdiv">
            <Content color="yellow" />
          </div>
        </div>
        <div>
          <Descript name="Your place" />
          <div class="Contentdiv">
            <Content color="#543E47" />
          </div>
        </div>
        <div>
          <Descript name="Your news" />
          <div class="Contentdiv">
            <Content color="#2DB400" />
          </div>
        </div>
        <div>
          <Descript name="Your youtube videos" />
          <div class="Contentdiv">
            <Content color="#C4302B" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
