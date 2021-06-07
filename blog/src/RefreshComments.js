import React, {useState} from "react";

let wids = [];
let wnames = [];
let wpasses = [];
let wdates = [];
let contents = [];

export function RefreshComments(props) {
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

    let resultArr = [];
    resultArr.push(<button onClick={() => RefreshComments(props)}>refresh</button>);
    for(let i=0;i<wids.length;i++){
        resultArr.push(
            <table border={3} width={600} align={"center"}>
                <tr>
                    <td>
                        wid : {wids[{i}]}
                    </td>
                    <td>
                        wname : {wnames[{i}]}
                    </td>
                    <td>
                        wpass : {wpasses[{i}]}
                    </td>
                    <td>
                        wdate : {wdates[{i}]}
                    </td>
                    <td>
                        content : {contents[{i}]}
                    </td>
                    <td>
                        <button onClick={()=>deleteComment(wids[{i}],wpasses[{i}])}/>
                    </td>
                </tr>
            </table>);
    }

    return resultArr;
}

function deleteComment(wid, wpass) {
    let inputPass = prompt("비밀번호를 입력하세요");

    if (inputPass == wpass) {
        let response = fetch("/deleteComment.php?wid=" + wid);
        alert("글이 삭제되었습니다!");
    } else {
        alert("비밀번호가 틀렸습니다!");
    }
}
