const weatherData = {
  1816670: { lat: 39.91,  lon: 116.39,  desc: '曇りがち', tempMin:  9.9, tempMax:  9.9, humidity: 14, speed: 2.65,deg: 197, name: '北京市',        icon: '04d' },
  1850147: { lat: 35.69,  lon: 139.69,  desc: '晴れ',     tempMin: 16.0, tempMax: 21.5, humidity: 52, speed: 3.8, deg: 270, name: 'Tokyo',         icon: '01d' },
  2147714: { lat: -33.87, lon: 151.21,  desc: '快晴',     tempMin: 18.2, tempMax: 24.0, humidity: 60, speed: 4.2, deg: 150, name: 'Sydney',        icon: '01d' },
  2643743: { lat: 51.51,  lon:  -0.13,  desc: '薄曇り',   tempMin:  9.0, tempMax: 13.4, humidity: 80, speed: 5.1, deg:  45, name: 'London',        icon: '03d' },
  5128581: { lat: 40.71,  lon: -74.01,  desc: '晴れ',     tempMin: 14.3, tempMax: 20.0, humidity: 50, speed: 4.6, deg: 300, name: 'New York',      icon: '01d' },
};

document.querySelector('#search-btn').addEventListener('click', function () {
  const id = Number(document.querySelector('#city-select').value);
  const d = weatherData[id];

  document.querySelector('#result-list').innerHTML = `
    <li>緯度: ${d.lat}</li>
    <li>経度: ${d.lon}</li>
    <li>天気: ${d.desc}</li>
    <li>最低気温: ${d.tempMin}</li>
    <li>最高気温: ${d.tempMax}</li>
    <li>湿度: ${d.humidity}</li>
    <li>風速: ${d.speed}</li>
    <li>風向: ${d.deg}</li>
    <li>都市名: ${d.name}</li>
  `;

  const icon = document.querySelector('#weather-icon');
  icon.src = `https://openweathermap.org/img/wn/${d.icon}@2x.png`;
  icon.alt = d.desc;

  document.querySelector('#result-section').removeAttribute('hidden');
});
