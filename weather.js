
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    console.log('都市名：' + data.name);
    console.log('緯度：' + data.coord.lat);
    console.log('経度：' + data.coord.lon);
    console.log('天気：' + data.weather[0].description);
    console.log('最低気温：' + data.main.temp_min);
    console.log('最高気温：' + data.main.temp_max);
    console.log('湿度：' + data.main.humidity);
    console.log('風速：' + data.wind.speed);
    console.log('風向：' + data.wind.deg);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    let result = document.createElement('div');
    result.id = 'result';
    document.body.insertAdjacentElement('beforeend', result);

    let heading = document.createElement('h2');
    heading.textContent = '以下の地域の天候に関する情報を検索して表示します';
    result.insertAdjacentElement('beforeend', heading);

    let items = [
        '都市名：' + data.name,
        '緯度：' + data.coord.lat,
        '経度：' + data.coord.lon,
        '天気：' + data.weather[0].description,
        '最低気温：' + data.main.temp_min,
        '最高気温：' + data.main.temp_max,
        '湿度：' + data.main.humidity,
        '風速：' + data.wind.speed,
        '風向：' + data.wind.deg
    ];

    let ul = document.createElement('ul');
    for (let text of items) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.insertAdjacentElement('beforeend', li);
    }
    result.insertAdjacentElement('beforeend', ul);

    let figure = document.createElement('figure');
    let icon = document.createElement('img');
    icon.src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    icon.alt = data.weather[0].description;
    figure.insertAdjacentElement('beforeend', icon);
    result.insertAdjacentElement('beforeend', figure);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

