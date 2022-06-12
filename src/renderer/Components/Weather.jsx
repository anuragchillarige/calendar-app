import { useState } from 'react';

export default function Weather() {
  const [temp, setTemp] = useState();
  const [highTemp, setHighTemp] = useState();
  const [lowTemp, setLowTemp] = useState();
  const [img, setImg] = useState();
  const city = 'Cupertino';

  function convertF(celcius) {
    return Math.round(celcius * (9.0 / 5) + 32);
  }

  function setWeather(data) {
    setTemp(convertF(data.main.temp));
    setHighTemp(convertF(data.main.temp_max));
    setLowTemp(convertF(data.main.temp_min));
    setImg(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  }

  const sds = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=91ed74c2909e6d1d05ef3dd5569b5de2`
  )
    .then((response) => response.json())
    .then((data) => setWeather(data));

  return (
    <div className="weather">
      <p className="cityName">Weather in {city}</p>
      <h2 className="temp">{temp}˚F</h2>

      <div className="moreInfo">
        <img src={img} alt="" />
        <p className="minmax">
          {highTemp}˚F / {lowTemp}˚F
        </p>
      </div>
    </div>
  );
}
