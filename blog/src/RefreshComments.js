import React, {useState} from "react";

export function RefreshComments(props) {
    let wids = [];
    let wnames = [];
    let wpasses = [];
    let wdates = [];
    let contents = [];

    fetch('/showComments.php?w3=' + props.address)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            for(let i=0;i<json.length;i++){
                wids.push(json[i].wid);
                wnames.push(json[i].wname);
                wpasses.push(json[i].wpass);
                wdates.push(json[i].wdate);
                contents.push(json[i].content);
            }
        })

    return (<table border={3} width={600} align={"center"}>
        <tr>
            <button onClick={() => RefreshComments(props)}>refresh</button>
        </tr>
            <tr>
                <td>
                    wid : {wids[0]}
                </td>
                <td>
                    wname : {wnames[0]}
                </td>
                <td>
                    wpass : {wpasses[0]}
                </td>
                <td>
                    wdate : {wdates[0]}
                </td>
                <td>
                    content : {contents[0]}
                </td>
            </tr>
    </table>
    );
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
