import React, { useState } from "react";
import "./App.css";
import axios from "axios";

<<<<<<< HEAD
function deleteComment(wid, wpass) {
  let inputPass = prompt("비밀번호를 입력하세요");
  if (inputPass === wpass) {
    let response = fetch("/deleteComment.php?wid=" + wid);
    alert("글이 삭제되었습니다!");
  } else {
    alert("비밀번호가 틀렸습니다!");
  }
}

class CommentsInfo extends React.Component {
  render() {
    return (
      <div>
        <span>Name : {this.props.comments["wname"]}</span>
        <br />
        <span>Content : {this.props.comments["content"]}</span>
        <br />
        <span>Date : {this.props.comments["wdate"]}</span>
        <br />
        <span>
          <button
            onClick={() =>
              deleteComment(
                this.props.comments["wid"],
                this.props.comments["wpass"]
              )
            }
          >
            ㅡ
          </button>
        </span>
        <hr />
      </div>
    );
  }
}

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wname: "",
      wpass: "",
      content: "",
      comments: [],
    };
  }
=======
class CommentsInfo extends React.Component{
    render() {
        return(
            <table border={0} className={"commentTable"}>
                <tr>
                    <td>
                        Name : {this.props.comments['wname']}
                    </td>
                    <td>
                        Content : {this.props.comments['content']}
                    </td>
                    <td>
                        Date : {this.props.comments['wdate']}
                    </td>
                </tr>
                <hr/>
            </table>
        );
    }
}

class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            w3: '',
            wname: '',
            wpass: '',
            content: '',
            comments: []
        };
    }
>>>>>>> origin/one

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

<<<<<<< HEAD
  handleAdd = (e) => {
    e.preventDefault();
    const form = document.getElementById("addForm");
    const comment = new FormData(form);
    const api = axios.create({ baseURL: "http://goweb.dothome.co.kr/" });
    api.post("addComment.php?w3=" + this.props.address, comment);
    alert("추가되었습니다");
    this.setState({
      wname: "",
      wpass: "",
      content: "",
    });
    this.handleShow(e);
  };

  handleShow = (e) => {
    let arr = [];
    axios
      .get("showComments.php?w3=" + this.props.address)
      .then(function (response) {
        //console.log(response)
        for (let i = 0; i < response.data.length; i++) {
          arr.push(response.data[i]);
        }
      });
    this.setState({
      comments: arr,
    });
    //console.log(this.state.comments)
  };

  render() {
    const mapToComponent = (data) => {
      return data.map((comments, i) => {
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
          <table border={5} width={600} align={"center"}>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type={"text"}
                  name={"wname"}
                  value={this.state.wname}
                  onChange={this.handleChange}
                />
              </td>
              <td>Password</td>
              <td>
                <input
                  type={"password"}
                  name={"wpass"}
                  value={this.state.wpass}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <textarea
                  placeholder={"내용을 입력하세요"}
                  name={"content"}
                  value={this.state.content}
                  onChange={this.handleChange}
                  rows={2}
                  cols={80}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={4} align={"right"}>
                <input type={"submit"} value={"+"} />
              </td>
            </tr>
          </table>
        </form>
        <br />
        Comments
        <button onClick={this.handleShow}>refresh</button>
        {mapToComponent(this.state.comments)}
      </div>
    );
  }
=======
    handleW3 = e => {
        this.setState({
            w3: this.props.address
        })
    }

    handleAdd = e =>{
        e.preventDefault()
        const form = document.getElementById("addForm")
        const comment = new FormData(form)
        const api = axios.create({baseURL: "http://goweb.dothome.co.kr/"})
        api.post("addComment.php?w3=" + this.props.address, comment)
        console.log("add()")
        alert("추가되었습니다")
        this.setState({
            wname: '',
            wpass: '',
            content: ''
        })
        this.handleShow(e)
    }

    handleShow = async (e) => {
        e.preventDefault()
        const arr = []
        console.log("show()")
        const response = await axios.get('showComments.php?w3=' + this.props.address)
        response.data.forEach(row=>{
            arr.push(row)
        })
        this.setState({
            comments: arr
        })
    }

    render() {
        const mapToComponent = data => {
            return data.map((comments, i) => {
                console.log("CommentsInfo")
                return (<CommentsInfo comments={comments} key={i}/>);
            });
        };

        return(
          <div className={"ContentBox"} style={{backgroundColor: this.props.color}}>
              <p>{this.props.address}</p>
              <form onSubmit={this.handleAdd} id={"addForm"}>
                  <table border={5}  className="one_table" >
                      <tr>
                          <td>Name</td>
                          <td>
                              <input type={"text"} name={"wname"} value={this.state.wname} onChange={this.handleChange} className={"TextBox"}/>
                          </td>
                          <td rowSpan={3}>
                              <input type={"submit"} value={"+"}/>
                          </td>
                      </tr>
                      <tr>
                          <td colSpan={4}>
                              <textarea placeholder={"내용을 입력하세요"} name={"content"} value={this.state.content} onChange={this.handleChange} className={"InputBox"}/>
                          </td>
                      </tr>
                  </table>
              </form>
              <br/>
              <h3>Comments</h3>
              <button className={"refreshButton"} onClick={this.handleShow} onChange={this.handleChange}>
                  refresh
              </button>
              <div className={"scrollComments"}>
                  {mapToComponent(this.state.comments)}
              </div>
          </div>
        );
    }
>>>>>>> origin/one
}

export default Comments;
