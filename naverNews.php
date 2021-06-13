<?php

function naverNewsResult($query='', $sort='', $display=0, $start=0){
    $client_id = "6EIYHZ84dO3LI3RdpzWp";
    $client_secret = "52XxUwH2UQ";
    $encText = urlencode("네이버오픈API");
    $url = "https://openapi.naver.com/v1/search/news.json"; // json 결과
    // $url = "https://openapi.naver.com/v1/search/news.xml"; // xml 결과
    // 검색어, 필수 입력
    $url .= "?query=".urlencode($query);

    // 정렬, sim (정확도순) or date(최신순). 없으면 default 값인 sim 으로 적용됨
    if($sort != "")
        $url .= "&sort=".$sort;

    // 검색 시작 위치, 없으면 기본값
    if($start > 0)
        $url .= "&start=".$start;

    // 한 페이지에 보여줄 개수, 없으면 기본값
    if($display > 0)
        $url .= "&display=".$display;
    $is_post = false;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, $is_post);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $headers = array();
    $headers[] = "X-Naver-Client-Id: ".$client_id;
    $headers[] = "X-Naver-Client-Secret: ".$client_secret;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    $response = curl_exec ($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    // echo "status_code:".$status_code."";
    curl_close ($ch);
    if($status_code == 200) {
        // echo $response;
        return json_decode($response, true);
    } else {
        return "Error 내용:".$response;
    }
}
?>
<?php
$total = 3;
$word = $_GET['w3'];
$wordsplit = explode('.', $word);
$return_value = array();
for($i = 0; $i < 3; $i = $i+ 1){
    $problem = naverNewsResult($wordsplit[$i], "", $total);
    $res = array();
    $res['word'] = $wordsplit[$i];
    $res['title'] = $problem['items'][$i]['title'];
    $res['description'] = $problem['items'][$i]['description'];
    $res['link'] = $problem['items'][$i]['link'];
    $return_value[] = $res;
}
echo json_encode($return_value);
?>