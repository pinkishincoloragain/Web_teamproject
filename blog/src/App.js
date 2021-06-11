import React from "react";
import Header from "./Header";
import Content from "./Content";
import Descript from "./Descript";
import Bar from "./SeperateBar";
import MapComponent from "./MapComponent";
import ProgressBar from "react-scroll-progress-bar";
import Video from "./Video";
import Section from "./Section";
import Navbar from "./Navbar";
import { searchYouTube } from "./searchYouTube";
import { fakeData } from "./fakeData";
import Comments from "./Comments";
import axios from "axios";
import News from "./News";

const youTube = {
  query: "",
  max: 1,
  //key: "AIzaSyAYtQoo4ySatdc2Ul7tM8h4h4W_VMXhFbM",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: fakeData,
      current: fakeData[0],
      fullWord: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // API를 요청하고 그에 따른 응답을 상태에 반영하는 함수
  goToSearch() {
    searchYouTube(youTube, (result) => {
      this.setState({ videos: [...result], current: result[0] });
    });
  }
  // 검색 버튼을 누르면 최종적으로 실행되는 함수
  // 새로운 검색어(newQuery)를 받아서 youTube 객체에 반영하고 goToSearch 메소드 실행
  handleSearch(newQuery) {
    this.setState({
      fullWord: newQuery,
    });
    newQuery = newQuery.split(".");
    alert("change: " + newQuery[0]);
    // alert("change");
    youTube.query = newQuery[0];
    this.goToSearch();
  }

  handleChange(videoKey) {
    for (let i = 0; i < this.state.videos.length; i++) {
      if (videoKey === this.state.videos[i].id.videoId) {
        this.setState({ current: this.state.videos[i] });
        break;
      }
    }
  }

  componentDidMount() {
    this.goToSearch();
  }

  render() {
    return (
      <div className="App">
        <Section id="section1" />
        <Header />
        <ProgressBar height="2vh" bgcolor="#F43059" duration="1" />

        <Bar />

        <div className="page">
          <Section id="section2" />
          <Descript name="Let's get it started" color="#F7E600" />
          <div className="Contentdiv">
            {/* <Content color="#F7E600" /> */}
            <MapComponent search={this.handleSearch} />
          </div>
        </div>
        <div className="page">
          <Section id="section4" />
          <Descript name="Your News" color="#2DB400" />
          <div className="Contentdiv">
            {this.state.fullWord === "" ? (
              <Content color="#2DB400" />
            ) : (
              <News color="#2DB400" address={this.state.fullWord} />
            )}
          </div>
        </div>
        <div className="page">
          <Section id="section5" />
          <Descript name="Your Youtube videos" color="#C4302B" />
          <div className="Contentdiv">
            {/* <Content color="#C4302B" /> */}
            <Video video={this.state.current} />
          </div>
        </div>
        <div className="page">
          <Section id="section6" />
          <Descript name="Make comment on this place!" color="#E2DFD8" />
          <div className="Contentdiv">
            <Comments
              color="#E2DFD8"
              address={this.state.fullWord}
              className="Commentsdiv"
            />
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
