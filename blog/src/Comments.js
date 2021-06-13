import React from "react";
import "./App.css";
import axios from "axios";
import Swal from "sweetalert2";

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
      <div className="ContentBox" style={{ backgroundColor: this.props.color }}>
        <form onSubmit={this.handleAdd} id="addForm">
          <div className="inputForm">
            <div style={{ marginLeft: "10vw", display: "flex" }}>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "1.5vh",
                  marginRight: "2vw",
                }}>
                이름
              </div>
              <input
                type={"text"}
                name={"wname"}
                value={this.state.wname}
                onChange={this.handleChange}
                className={"TextBox"}
              />
            </div>
            <textarea
              placeholder={"적어보세요."}
              name={"content"}
              value={this.state.content}
              onChange={this.handleChange}
              className={"InputBox"}
            />
            {/* <input type={"submit"} value={"+"} /> */}
            <button
              id="submitBtn"
              type={"submit"}
              onClick={() =>
                Swal.fire({
                  title: "<strong>댓글을 작성했어요!</strong>",
                  html: `다른 사람들이 쓴 댓글들도 확인해 보세요!`,
                  showCloseButton: true,
                  showCancelButton: false,
                  focusConfirm: false,
                  reverseButtons: true,
                  focusCancel: true,
                  background: "white",
                  color: "midnightblue",
                  backdrop: `
    rgba(0,0,123,0.4)
  `,
                }).then((result) => {
                  if (result.value) {
                    // window.location.href = `../public/kakaomap.html`;
                  }
                })
              }>
              제출하기!
            </button>
          </div>
        </form>
        <br />
        <div className="showTable">
          <h3 id="comm">댓글</h3>

          <div className={"scrollComments"}>
            {mapToComponent(this.state.comments)}
          </div>
          <button
            className="refreshButton"
            onClick={this.handleShow}
            onChange={this.handleChange}>
            새로고침
          </button>
        </div>
      </div>
    );
  }
}

export default Comments;
