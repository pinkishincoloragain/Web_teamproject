import React from "react";
import Header from "./Header";
import Content from "./Content";
import Descript from "./Descript";
import Bar from "./SeperateBar";
import Map from "./Map";
import Map_component from "./Map_component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Bar />
        </div>
        <div>
          <Descript name="Let's get it started" color="#F7E600" />
          <div className="Contentdiv">
            {/* <Content color="#F7E600" /> */}
            <Map_component />
          </div>
        </div>
        <div>
          <Descript name="Your Place" color="#543E47" />
          <div className="Contentdiv">
            <Content color="#543E47" />
          </div>
        </div>
        <div>
          <Descript name="Your News" color="#2DB400" />
          <div className="Contentdiv">
            <Content color="#2DB400" />
          </div>
        </div>
        <div>
          <Descript name="Your Youtube videos" color="#C4302B" />
          <div className="Contentdiv">
            <Content color="#C4302B" />
          </div>
        </div>
        <div>
          <Descript name="Make comment on this place!" color="#E2DFD8" />
          <div className="Contentdiv">
            <Content color="#E2DFD8" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
