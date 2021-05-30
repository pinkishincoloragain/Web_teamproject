import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Descript from "./Descript";
import Bar from "./SeperateBar";

function App() {
  const [address, setAddress] = useState("/// 당신의 위치를 고르세요!");

  const setParent = (e) => {
    setAddress(e);
  };

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
          <MapComponent setParent={(e) => setParent(e)} />
        </div>
      </div>
      <div>
        <Descript name="Your Place" color="#543E47" />
        <div className="Contentdiv">
          <Content color="#543E47" address={address} />
        </div>
      </div>
      <div>
        <Descript name="Your News" color="#2DB400" />
        <div className="Contentdiv">
          <Content color="#2DB400" address={address} />
        </div>
      </div>
      <div>
        <Descript name="Your Youtube videos" color="#C4302B" />
        <div className="Contentdiv">
          <Content color="#C4302B" address={address} />
        </div>
      </div>
      <div>
        <Descript name="Make comment on this place!" color="#E2DFD8" />
        <div className="Contentdiv">
          <Content color="#E2DFD8" address={address} />
        </div>
      </div>
    </div>
  );
}

export default App;
