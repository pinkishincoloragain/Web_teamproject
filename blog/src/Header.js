import React from "react";
import "./App.css";
import w3w from "./logos/w3w.png";
import kakao from "./logos/kakaomap.png";
import x from "./logos/x.png";
import Swal from "sweetalert2";

class Header extends React.Component {
  render() {
    // eslint-disable-next-line
    return (
      <div className="all">
        <h1 className="Header">
          <p className="typing">지금. 당신이. 서 있는 곳.</p>
        </h1>

        <div className="imgholder">
          <img
            className="Logo1"
            src={w3w}
            alt="w3w"
            border="0"
            onClick={() =>
              Swal.fire({
                title: "<strong>W3W API를 아십니까..?</strong>",
                html: `제가 직접 알려 드리겠습니다..<br/>
                what3words (W3W)는 전 세계 지도 상의 좌표평면<br/>(3m x 3m)을 
                3개의 단어로 표현한 좌표체계입니다!
                `,
                icon: "success",
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                reverseButtons: true,
                focusCancel: true,
                cancelButtonText: `압니다.`,
                confirmButtonText: `알겠습니다.`,
                background: "white",
                color: "midnightblue",
                backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    center bottom
    repeat
  `,
              }).then((result) => {
                if (result.value) {
                  // window.location.href = `/w3w`;
                }
              })
            }
          />
          <img
            className="xImg"
            src={x}
            alt="x"
            border="0"
            onClick={() =>
              Swal.fire({
                title: "<strong>사용 방법!</strong>",
                html: `<b>제가 직접 알려 드리겠습니다</b><br/><br/><br/>
                1. 지도에서 자신의 위치를 고른다!<br/><br/>
                2. 우리가 API를 써서 위치를 단어로 바꿔 드려요<br/><br/>
                3. 추천 유튜브 영상과 네이버 기사를 보고,<br/><br/>
                4. 이 위치에 대한 리뷰를 댓글로 남겨주세요!<br/><br/>
                5. 친구들에게 이 사이트를 알려 주세요!`,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                reverseButtons: true,
                focusCancel: true,
                cancelButtonText: `압니다.`,
                confirmButtonText: `알겠습니다.`,
                background: "white",
                color: "midnightblue",
                backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    center bottom
    repeat
  `,
              }).then((result) => {
                if (result.value) {
                  // window.location.href = `../public/kakaomap.html`;
                }
              })
            }
          />
          <img
            className="Logo2"
            src={kakao}
            alt="kakao"
            border="0"
            onClick={() =>
              Swal.fire({
                title: "<strong>카카오맵 API를 아십니까..?</strong>",
                html: `제가 직접 알려 드리겠습니다<br/>
                사용자의 위치를 지도에서 고르면,<br/> 카카오맵 API가 용자의 위치를 좌표로 돌려 줍니다!`,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                reverseButtons: true,
                focusCancel: true,
                icon: "success",
                cancelButtonText: `압니다.`,
                confirmButtonText: `알겠습니다.`,
                background: "white",
                color: "midnightblue",
                backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    center bottom
    repeat
  `,
              }).then((result) => {
                if (result.value) {
                  // window.location.href = `../public/kakaomap.html`;
                }
              })
            }
          />
        </div>
      </div>
    );
  }
}

export default Header;
