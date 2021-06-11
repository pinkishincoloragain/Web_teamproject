import React from "react";
import "./App.css";
import axios from "axios";

class CommentsInfo extends React.Component {
  render() {
    return (
      <table border={0} className={"commentTable"}>
        <tr>
          <td>Name : {this.props.comments["wname"]}</td>
          <td>Content : {this.props.comments["content"]}</td>
          <td>Date : {this.props.comments["wdate"]}</td>
        </tr>
        <hr />
      </table>
    );
  }
}

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      w3: "",
      wname: "",
      wpass: "",
      content: "",
      comments: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleW3 = (e) => {
    this.setState({
      w3: this.props.address,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    const form = document.getElementById("addForm");
    const comment = new FormData(form);
    const api = axios.create({ baseURL: "http://goweb.dothome.co.kr/" });
    api.post("addComment.php?w3=" + this.props.address, comment);
    console.log("add()");
    alert("추가되었습니다");
    this.setState({
      wname: "",
      wpass: "",
      content: "",
    });
    this.handleShow(e);
  };

  handleShow = async (e) => {
    e.preventDefault();
    const arr = [];
    console.log("show()");
    const response = await axios.get(
      "showComments.php?w3=" + this.props.address
    );
    response.data.forEach((row) => {
      arr.push(row);
    });
    this.setState({
      comments: arr,
    });
  };

  render() {
    const mapToComponent = (data) => {
      return data.map((comments, i) => {
        console.log("CommentsInfo");
        return <CommentsInfo comments={comments} key={i} />;
      });
    };

    return (
      <div
        className={"ContentBox"}
        style={{ backgroundColor: this.props.color }}
      >
        <p>{this.props.address}</p>
        <form onSubmit={this.handleAdd} id={"addForm"}>
          <table border={5} className="one_table">
            <tr>
              <td>Name</td>
              <td>
                <input
                  type={"text"}
                  name={"wname"}
                  value={this.state.wname}
                  onChange={this.handleChange}
                  className={"TextBox"}
                />
              </td>
              <td rowSpan={3}>
                <input type={"submit"} value={"+"} />
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <textarea
                  placeholder={"내용을 입력하세요"}
                  name={"content"}
                  value={this.state.content}
                  onChange={this.handleChange}
                  className={"InputBox"}
                />
              </td>
            </tr>
          </table>
        </form>
        <br />
        <h3>Comments</h3>
        <button
          className={"refreshButton"}
          onClick={this.handleShow}
          onChange={this.handleChange}
        >
          refresh
        </button>
        <div className={"scrollComments"}>
          {mapToComponent(this.state.comments)}
        </div>
      </div>
    );
  }
}

export default Comments;
