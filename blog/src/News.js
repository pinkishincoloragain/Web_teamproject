import React from "react";
import "./App.css";
import axios from "axios";

class NewsInfo extends React.Component {
  render() {
    const description = this.props.articles["description"]
      .replace("<b>", "")
      .replace("</b>", "")
      .replace("'&quot;'", "")
      .replace("&amp;", "");
    return (
      <table border={0}>
        <tr>
          <h2>#{this.props.articles["word"]}</h2>
        </tr>
        <tr>
          <td>title: {this.props.articles["title"]}</td>
        </tr>
        <tr>
          <td>
            description:{" "}
            {description
              .replace("<b>", "")
              .replace("</b>", "")
              .replace("&quot;", "")
              .replace("&amp;", "")}
          </td>
        </tr>
        <hr />
      </table>
    );
  }
}

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handleShow = async (e) => {
  //   alert("check");
  //   e.preventDefault();
  //   const arr = [];
  //   const response = await axios.get("naverNews.php?w3=" + this.props.address);
  //   console.log(response.data);
  //   response.data.forEach((row) => {
  //     arr.push(row);
  //   });
  //   this.setState({
  //     articles: arr,
  //   });
  // };

  render() {
    let words = this.props.address.split(".");
    console.log(words);
    const mapToComponent = (data) => {
      return data.map((articles, i) => {
        console.log("NewsInfo");
        return <NewsInfo words={words} articles={articles} key={i} />;
      });
    };
    return (
      <div
        className={"ContentBox"}
        style={{ backgroundColor: this.props.color }}
      >
        {mapToComponent(this.props.articles)}
      </div>
    );
  }
}

export default News;
