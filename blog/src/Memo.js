import React, { useState } from "react";
import "./App.css";
import Loading from "./Loading";

const Memo = (props) => {
  // const [address, setAddress] = useState("///당신의 위치를 고르세요!");
    let wids = [];
    let wnames = [];
    let wpasses = [];
    let wdates = [];
    let contents = [];

    const RefreshComments = () => {
        let resultArr = [];
        while(resultArr.length>0){
            resultArr.pop();
        }
        fetch('/showComments.php?w3=' + props.address)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                for (let i = 0; i < json.length; i++) {
                    wids.push(json[i].wid);
                    wnames.push(json[i].wname);
                    wpasses.push(json[i].wpass);
                    wdates.push(json[i].wdate);
                    contents.push(json[i].content);
                }
            })
        for(let i=0;i<wids.length;i++){
            resultArr.push(
                <table border={3} width={600} align={"center"}>
                    <tr>
                        <td>
                            wid : {wids[i]}
                        </td>
                        <td>
                            wname : {wnames[i]}
                        </td>
                        <td>
                            wpass : {wpasses[i]}
                        </td>
                        <td>
                            wdate : {wdates[i]}
                        </td>
                        <td>
                            content : {contents[i]}
                        </td>
                        <td>
                            <button onClick={()=>deleteComment(wids[i], wpasses[i])}>
                                삭제
                            </button>
                        </td>
                    </tr>
                </table>);
        }
        console.log(resultArr);
        return (resultArr);
    }

    const deleteComment = (wid, wpass) => {
        let inputPass = prompt("비밀번호를 입력하세요");
        if (inputPass === wpass) {
            let response = fetch("/deleteComment.php?wid=" + wid);
            alert("글이 삭제되었습니다!");
        } else {
            alert("비밀번호가 틀렸습니다!");
        }
    }

    // 이게 기본값임.
  return (
    <div className="ContentBox" style={{ backgroundColor: props.color }}>
      <h2>Content</h2>
      <p> Hey! </p>
      <p>{props.address}</p>

      {/* 입력받는 박스(버튼을 누르면 박스비우기 구현하지 못함) */}
      <iframe
        id={"iframe1"}
        name={"iframe1"}
        width={0}
        height={0}
        frameBorder={0}
      />

      <form
        method={"post"}
        action={"/addComment.php?w3=" + props.address}
        target={"iframe1"}
        encType={"utf8"}
      >
        <table border={5} width={600} align={"center"}>
          <tr>
            <td>Name</td>
            <td>
              <input type={"text"} name={"wname"}/>
            </td>
            <td>Password</td>
            <td>
              <input type={"password"} name={"wpass"}/>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <textarea
                placeholder={"내용을 입력하세요"}
                name={"content"}
                rows={2}
                cols={80}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4} align={"right"}>
              <input type={"submit"} value={"+"} onClick={()=>RefreshComments()}/>
            </td>
          </tr>
        </table>
      </form>

      <br />

      {/* 지도의 '변환하기' 버튼을 클릭하면 작동 / 일단은 임의의 버튼으로 구현 */}
      <h2>방문글 목록</h2>
        <RefreshComments address={props.address} />
        <button onClick={() => RefreshComments()}>refresh</button>
      <Loading />
    </div>
  );
};


Memo.defaultProps = {
  color: "midnightblue",
};

export default Memo;
