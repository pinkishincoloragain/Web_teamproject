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
      <div>
        <h1 className="Header">
          <p className="typing">지금. 당신이. 서 있는 곳.</p>
        </h1>
        <div className="imgholder">
          <img
            className="Logo1"
            src={w3w}
            alt="w3w"
            onClick={() =>
              Swal.fire({
                title: "<strong>W3W API를 아십니까..?</strong>",
                icon: "warning",
                html: `모르시면 제가 직접 알려 드리겠습니다..
                설명설명`,
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
    left top
    no-repeat
  `,
              }).then((result) => {
                if (result.value) {
                  // window.location.href = `/w3w`;
                }
              })
            }
          />
          <img className="xImg" src={x} alt="x"></img>
          <img
            className="Logo2"
            src={kakao}
            alt="kakao"
            onClick={() =>
              Swal.fire({
                title: "<strong>카카오맵 API를 아십니까..?</strong>",
                icon: "warning",
                html: `모르시면 제가 직접 알려 드리겠습니다..
                설명설명`,
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
    left top
    no-repeat
  `,
              }).then((result) => {
                if (result.value) {
                  // window.location.href = `../public/kakaomap.html`;
                }
              })
            }
          />
          <div>
            {/* <div className="textholder">
              <span className="imgtext">W3W</span>
              <span className="imgtext">KaKaoMap</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
