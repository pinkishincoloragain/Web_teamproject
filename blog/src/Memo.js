import React, {useState} from "react";
import "./App.css";
import Loading from "./Loading";
import axios from "axios";

function Memo(props) {
    const [address, setAddress] = useState("///당신의 위치를 고르세요!");
    // 이게 기본값임.

    return (
        <div className="ContentBox" style={{backgroundColor: props.color}}>
            <h2>Content</h2>
            <p> Hey! </p>
            <p>{props.address}</p>

            {/* 입력받는 박스(버튼을 누르면 박스비우기 구현하지 못함) */}
            <iframe id={"iframe1"} name={"iframe1"} width={0} height={0} frameBorder={0}/>

            <form method={"post"} action={'/addComment.php?w3='+ props.address} target={"iframe1"} encType={"utf8"}>
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
                            <textarea placeholder={"내용을 입력하세요"} name={"content"} rows={2} cols={80}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} align={"right"}>
                            <input type={"submit"} value={"+"}/>
                        </td>
                    </tr>
                </table>
            </form>

            <br/>

            {/* 지도의 '변환하기' 버튼을 클릭하면 작동 / 일단은 임의의 버튼으로 구현 */}
            <h2>방문글 목록</h2>

            <input type="button" value="get data" onClick={ function () {
                fetch('/showComments.php?w3=' + props.address,{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (json) {
                        console.log(json)
                    })
            }.bind(this)
            }/>

            <Loading/>
        </div>
    );
}


Memo.defaultProps = {
    color: "midnightblue",
};

export default Memo;