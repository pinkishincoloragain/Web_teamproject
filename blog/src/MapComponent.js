import React, { useEffect } from "react";
import "./App.css";

// import Loading from "./Loading";

const { kakao } = window;
const { what3words } = window;

let word_address = "";

const MapComponent = (props) => {
  // const [address, setAddress] = useState(0);

  const sendWord = () => {
    props.search(word_address);
    // alert("word: " + word_address);
  };

  // const childFunction = (props) => {
  //   this.props.setParentValue(address);
  // };

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(35.88824182876274, 128.6112113456349),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      what3words.api
        .convertTo3wa({ lat: latlng.getLat(), lng: latlng.getLng() }, "ko")
        .then(function (response) {
          word_address = response.words;
          // setAddress(word_address);
          // var result = document.getElementById("words");
          var word = word_address.split(".");
          // result.innerHTML = "/// " + word_address.split();
          // result.innerHTML = "/// " + word[0];
          document.getElementById("word0").innerHTML = word[0] + ".";
          document.getElementById("word1").innerHTML = word[1] + ".";
          document.getElementById("word2").innerHTML = word[2] + ".";
        });
    });
  }, []);

  return (
    <div className="ContentBox-Map">
      <div id="myMap" style={{ width: "100%", height: "88%" }}></div>
      <div id="wordContainer">
        <div className="word">///&nbsp;</div>
        <div id="word0" className="word"></div>&nbsp;
        <div id="word1" className="word"></div>&nbsp;
        <div id="word2" className="word"></div>&nbsp;
      </div>
      <br />
      <button id="changeButton" onClick={sendWord}>
        쓰리쓰리 마쓰리 !!
      </button>
    </div>
  );
};

export default MapComponent;
