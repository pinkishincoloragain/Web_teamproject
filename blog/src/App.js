import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Descript from "./Descript";
import Bar from "./SeperateBar";
import Memo from "./Memo";
import Map from "./Map";
import jQuery from "jquery";
import MapComponent from "./MapComponent";
import Section from "./Section";
import Navbar from "./Navbar";

window.$ = window.jQuery = jQuery;

// Navbar 추가하기 !!!!

function App() {
  const [address, setAddress] = useState("/// 당신의 위치를 고르세요!");

  const setParent = (e) => {
    setAddress(e);
  };

  return (
    <div className="App">
      <Section id="section1" />
      <Header />
      <Bar />
      <div className="page">
        <Section id="section2" />
        <Descript name="Let's get it started" color="#F7E600" />
        <div className="Contentdiv">
          {/* <Content color="#F7E600" /> */}
          <MapComponent setParent={(e) => setParent(e)} />
        </div>
      </div>
      <div className="page">
        <Section id="section3" />
        <Descript name="Your Place" color="#543E47" />
        <div className="Contentdiv">
          <Content color="#543E47" address={address} />
        </div>
      </div>
      <div className="page">
        <Section id="section4" />
        <Descript name="Your News" color="#2DB400" />
        <div className="Contentdiv">
          <Content color="#2DB400" address={address} />
        </div>
      </div>
      <div className="page">
        <Section id="section5" />
        <Descript name="Your Youtube videos" color="#C4302B" />
        <div className="Contentdiv">
          <Content color="#C4302B" address={address} />
        </div>
      </div>
      <div className="page">
        <Section id="section6" />
        <Descript name="Make comment on this place!" color="#E2DFD8" />
        <div className="Contentdiv">
          <Content color="#E2DFD8" address={address} />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
