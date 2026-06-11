const weatherData = {
  360630:  { lat: 30.06,  lon: 31.25,   desc: '晴れ',     tempMin: 22.1, tempMax: 34.5, humidity: 38, speed: 3.1, deg: 320, name: 'Cairo',         icon: '01d' },
  524901:  { lat: 55.75,  lon: 37.62,   desc: '曇り',     tempMin:  2.3, tempMax:  6.8, humidity: 75, speed: 4.5, deg:  90, name: 'Moscow',        icon: '04d' },
  993800:  { lat: -26.20, lon: 28.04,   desc: '晴れ時々曇り', tempMin: 14.0, tempMax: 22.3, humidity: 55, speed: 2.8, deg: 180, name: 'Johannesburg', icon: '02d' },
  1816670: { lat: 39.91,  lon: 116.39,  desc: '曇りがち', tempMin:  9.9, tempMax:  9.9, humidity: 14, speed: 2.65,deg: 197, name: '北京市',        icon: '04d' },
  1850147: { lat: 35.69,  lon: 139.69,  desc: '晴れ',     tempMin: 16.0, tempMax: 21.5, humidity: 52, speed: 3.8, deg: 270, name: 'Tokyo',         icon: '01d' },
  1880252: { lat:  1.29,  lon: 103.85,  desc: '雨',       tempMin: 24.0, tempMax: 28.5, humidity: 88, speed: 1.5, deg: 210, name: 'Singapore',     icon: '10d' },
  2147714: { lat: -33.87, lon: 151.21,  desc: '快晴',     tempMin: 18.2, tempMax: 24.0, humidity: 60, speed: 4.2, deg: 150, name: 'Sydney',        icon: '01d' },
  2643743: { lat: 51.51,  lon:  -0.13,  desc: '薄曇り',   tempMin:  9.0, tempMax: 13.4, humidity: 80, speed: 5.1, deg:  45, name: 'London',        icon: '03d' },
  2968815: { lat: 48.85,  lon:   2.35,  desc: '晴れ時々曇り', tempMin: 11.0, tempMax: 16.2, humidity: 65, speed: 3.3, deg: 230, name: 'Paris',         icon: '02d' },
  3451189: { lat: -22.91, lon: -43.17,  desc: '快晴',     tempMin: 23.5, tempMax: 30.1, humidity: 72, speed: 2.0, deg: 110, name: 'Rio de Janeiro', icon: '01d' },
  5128581: { lat: 40.71,  lon: -74.01,  desc: '晴れ',     tempMin: 14.3, tempMax: 20.0, humidity: 50, speed: 4.6, deg: 300, name: 'New York',      icon: '01d' },
  5368361: { lat: 34.05,  lon: -118.24, desc: '快晴',     tempMin: 18.0, tempMax: 27.3, humidity: 35, speed: 2.3, deg: 260, name: 'Los Angeles',   icon: '01d' },
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
