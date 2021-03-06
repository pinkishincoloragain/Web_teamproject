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
import { searchNews } from "./searchNews";
import { fakeData } from "./fakeData";
import Comments from "./Comments";
import News from "./News";
import Footer from "./Footer";

const query = ["", "", ""];

const youTube = {
  max: 1,
  key: "AIzaSyCRb0GozgfE5bwF-NGIc-RL1GIn5yjTD28", //AIzaSyCRb0GozgfE5bwF-NGIc-RL1GIn5yjTD28
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: fakeData[0],
      second: fakeData[0],
      third: fakeData[0],
      fullWord: "",
      articles: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  // API를 요청하고 그에 따른 응답을 상태에 반영하는 함수
  goToSearch() {
    searchYouTube(query[0], youTube, (result) => {
      this.setState({ videos: [...result], first: result[0] });
    });
    searchYouTube(query[1], youTube, (result) => {
      this.setState({ videos: [...result], second: result[0] });
    });
    searchYouTube(query[2], youTube, (result) => {
      this.setState({ videos: [...result], third: result[0] });
    });
    setTimeout(1000);
  }
  // 검색 버튼을 누르면 최종적으로 실행되는 함수
  // 새로운 검색어(newQuery)를 받아서 youTube 객체에 반영하고 goToSearch 메소드 실행
  handleSearch(newQuery) {
    searchNews(newQuery, (result) => {
      this.setState({ articles: result });
      console.log(this.state.articles);
    });
    this.setState({
      fullWord: newQuery,
    });
    newQuery = newQuery.split(".");
    for (let i = 0; i < 3; i++) {
      query[i] = newQuery[i];
    }
    this.goToSearch();
  }

  render() {
    return (
      <div className="App">
        <Section id="section1" />
        <Navbar />

        <Header />
        <ProgressBar height="2vh" bgcolor="#F43059" duration="1" />
        <Bar />
        <div className="helper" style={{ fontSize: "180%", marginTop: "3vh" }}>
          X 버튼을 누르세요.
          <br />
        </div>
        <div style={{ fontSize: "100%", marginBottom: "40vh" }}>
          옆 아이콘도 꾹 눌러 보세요 ..
        </div>

        <div className="page">
          <Section id="section2" />
          <Descript name="시작해봅시다." id="des2" color="#F7E600" />
          <div className="Contentdiv">
            {/* <Content color="#F7E600" /> */}
            <MapComponent search={this.handleSearch} />
          </div>
        </div>
        <div className="page">
          <Section id="section4" />
          <Descript name="읽어봅시다." id="des4" color="#2DB400" />
          <div className="Contentdiv">
            {this.state.fullWord === "" ? (
              <Content color="#2DB400" />
            ) : (
              <News
                color="#2DB400"
                address={this.state.fullWord}
                articles={this.state.articles}
              />
            )}
          </div>
        </div>
        <div className="page">
          <Section id="section5" />
          <Descript name="봅시다." id="des5" color="#C4302B" />
          <div className="Contentdiv">
            {this.state.fullWord === "" ? (
              <Content color="#C4302B" />
            ) : (
              <Video
                first={this.state.first}
                second={this.state.second}
                third={this.state.third}
                address={this.state.fullWord}
                color="#C4302B"
              />
            )}
          </div>
        </div>
        <div className="page">
          <Section id="section6" />
          <Descript
            name="이 장소에 대한 글을 써 보세요!"
            id="des6"
            color="#E2DFD8"
          />
          <div className="Contentdiv">
            <Comments
              color="#E2DFD8"
              address={this.state.fullWord}
              className="Commentsdiv"
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
