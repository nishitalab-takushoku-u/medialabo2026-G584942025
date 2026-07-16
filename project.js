document.querySelector('#search-btn').addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
  const id = document.querySelector('#city-select').value;
  const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${id}.json`;

  axios.get(url)
    .then(showResult)  // 通信成功
    .catch(showError)  // 通信失敗
    .then(finish);     // 通信の最後の処理
}

// 通信が成功した時
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  printDom(data);
}

// 通信エラーが発生した時
function showError(err) {
  console.log(err);
}

// 通信の最後に実行する
function finish() {
  console.log('Ajax 通信が終わりました');
}

// 検索結果をページに表示する
function printDom(data) {
  const list = document.querySelector('#result-list');
  list.innerHTML = ''; // 前回の検索結果削除

  const weather = data.weather[0];

  list.innerHTML = `
    <li>都市名: ${data.name}</li>
    <li>緯度: ${data.coord.lat}</li>
    <li>経度: ${data.coord.lon}</li>
    <li>天気: ${weather.description}</li>
    <li>最低気温: ${data.main.temp_min}℃</li>
    <li>最高気温: ${data.main.temp_max}℃</li>
    <li>湿度: ${data.main.humidity}%</li>
    <li>風速: ${data.wind.speed}m/s</li>
    <li>風向: ${data.wind.deg}°</li>
  `;

  const icon = document.querySelector('#weather-icon');
  icon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  icon.alt = weather.description;

  document.querySelector('#result-section').removeAttribute('hidden');
}
