import React, { useState } from "react";
import "./App.css";
import Loading from "./Loading";
import refreshComments from "./refreshComments";

const Memo = (props) => {
  // const [address, setAddress] = useState("///당신의 위치를 고르세요!");

  function deleteComment(wid, wpass) {
    let inputPass = prompt("비밀번호를 입력하세요");

    if (inputPass == wpass) {
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
      <refreshComments />
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
              <input type={"text"} name={"wname"} />
            </td>
            <td>Password</td>
            <td>
              <input type={"password"} name={"wpass"} />
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
              <input type={"submit"} value={"+"} />
            </td>
          </tr>
        </table>
      </form>

      <br />

      {/* 지도의 '변환하기' 버튼을 클릭하면 작동 / 일단은 임의의 버튼으로 구현 */}
      <h2>방문글 목록</h2>

      <table>{/* <refreshComments address={props.address} /> */}</table>

      {/* 일단 임의의 wid와 wpass로 구현 */}
      <button onClick={() => deleteComment(63, 1234)}>삭제</button>

      <Loading />
    </div>
  );
};

{
  /* 파라미터로 현재 댓글의 wid와 wpass 를 받고 사용자에게 password를 입력받아 비교후 같으면 삭제 아니면 틀렸다고 띄워주기 */
}

// Memo.defaultProps = {
//   color: "midnightblue",
// };

export default Memo;
