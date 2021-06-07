

export const searchYouTube = ({query, max, key}, callback) => {
  const httpRequest = new XMLHttpRequest();

  var optionParams = {
    q: query, //검색할 단어
    part: "snippet",
    key: key, // API key value
    maxResults: max, // 검색할 동영상 수
  };

  // 한글은 uri encoding 해야함.
  optionParams.q = encodeURI(optionParams.q);

  var url = "https://www.googleapis.com/youtube/v3/search?";
  for (var option in optionParams) {
    url += option + "=" + optionParams[option] + "&";
  }

  httpRequest.open("GET", url);
  httpRequest.send();

  httpRequest.onreadystatechange = function () {
    if(httpRequest.readyState === httpRequest.DONE) {
      if(httpRequest.status === 200) {
        const response = JSON.parse(httpRequest.responseText);
        // var idx = String(Object.keys(response)[5]);
        // var temp = response[idx];
        // VideoId = temp[0].id.videoId;
        
        // return VideoId;
        callback(response.items);
      }
      else{
        console.error(httpRequest.responseText);
      }
    }
  };

  // alert("Search : "+VideoId);
};