var req = new XMLHttpRequest();

function getID(word){
    // 영상 검색에 필요한 변수
    var optionParams={
        q: word,
        part: "snippet",
        key: "AIzaSyCUIDAQFFfLpwYwJmogvgadNFq7kV4yhvg", // API key value
        maxResults: 2
    }
    // 한글은 uri encoding 해야함.
    optionParams.q = encodeURI(optionParams.q);

    var url="https://www.googleapis.com/youtube/v3/search?";
    for(var option in optionParams){
        url+=option+"="+optionParams[option]+"&";
    }

    url=url.substr(0, url.length-1)

    req.open('GET', url);
    req.onload = () => {
        console.log(req.response);
    };
    req.send();
}