var tag = document.createElement('script')

// youtube API add
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 영상에 대한 값과 이벤트 담는 변수
var player;


function onYouTubeIframeAPIReady(){
    // 'id value' 들어감
    player = new YT.Player('player', {
        // 임시 ID
        videoId : 'M7lc1UVf-VE',
        width : "400",
        height : "349", // 플레이어 크기
        playerVars:{// player 기본 속성
            'modestbranding': 1,
            'autoplay' : 0, // 자동 재생
            'controls' : 1, // 컨트롤러 유무
            'showinfo' : 0, // 재생영상에 대한 정보 유무
            'rel' : 0, // 영상 종료 후 관련 영상 표시 유무
            'loop' : 1, // 반복재생 유무
            'playlist' : 'M7lc1UVf-VE' 
            // 단일 동영상 반복 재생 위해 해당 매개변수 필요.
            // 같은 동영상 id 넣어주면 반복재생 쌉가능.
        },
        events: {
            'onReady': onPlayerReady, // 동영상이 준비되면 발생하는 함수
            'onStateChange' : onPlayerStateChange // 상태가 변함에 따라 해당 함수가 발생하는것.
        }

    })
}

function onPlayerReady(event) {
    event.target.playVideo(); // 준비된 동영상 재생.
    // 자동재생 설정 해놨으면 굳이 안해도 됨.
    // 재생시 음소거 등의 이벤트 원히면 이걸로 가능..
}

function onPlayerStateChange(){
    if(player.getPlayerState() == 1)
        console.log("ON")
    else if(player.getPlayerState() == 2)
        console.log("STOP")
    // -1: 시작안됨, 0: 종료, 1: 재생중, 2: 일시중지, 3: 버퍼링, 5: 동영상 신호
    // 플레이어의 상태 나타냄
}