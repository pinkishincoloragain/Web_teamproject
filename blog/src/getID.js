var req = new XMLHttpRequest();

function getID(word) {
  var data;
  var temp;
  var VideoId;

  // 영상 검색에 필요한 변수
  var optionParams = {
    q: word,
    part: "snippet",
    key: "AIzaSyCRb0GozgfE5bwF-NGIc-RL1GIn5yjTD28", // API key value
    maxResults: 1,
  };
  // 한글은 uri encoding 해야함.
  optionParams.q = encodeURI(optionParams.q);

  var url = "https://www.googleapis.com/youtube/v3/search?";
  for (var option in optionParams) {
    url += option + "=" + optionParams[option] + "&";
  }

  url = url.substr(0, url.length - 1);

  req.open("GET", url);
  req.onload = () => {
    data = JSON.parse(req.response);
    var idx = String(Object.keys(data)[5]);
    var temp = data[idx];
    VideoId = temp[0].id.videoId;
  };
  req.send();

  return VideoId;
}
