import React, { useState } from "react";
import "./App.css";
import Loading from "./Loading";

function Memo(props) {
  const [address, setAddress] = useState("///당신의 위치를 고르세요!");
  // 이게 기본값임.

  return (
    <div className="ContentBox" style={{ backgroundColor: props.color }}>
      <h2>Content</h2>
      <p> Hey! </p>
      <p>{props.address}</p>

      <p>재원아 마음대로 가지고 놀아 !!!!!</p>
      <p>props.address를 괄호 안에 넣으면 ?</p>
      <p>이렇게 된다 !!!! - {props.address} !!!!</p>

      <p>return 할 때 무조건 div 태그 안에 넣기 !!!</p>
      <Loading />
    </div>
  );
}

Memo.defaultProps = {
  color: "midnightblue",
};

export default Memo;
