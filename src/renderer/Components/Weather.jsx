import { useState } from 'react';

const IncorrectData = ({ city }) => {
  const [inp, setInp] = useState();

  return (
    <div className="weather noloc">
      <h2 className="noLocation">No Location Found</h2>
      <form
        onSubmit={function (event) {
          event.preventDefault();
          city(inp);
        }}
      >
        <input
          className="cityInput"
          type="text"
          placeholder="Enter City Name"
          onChange={(e) => {
            e.preventDefault();
            setInp(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default function Weather() {
  const [temp, setTemp] = useState();
  const [highTemp, setHighTemp] = useState();
  const [lowTemp, setLowTemp] = useState();
  const [img, setImg] = useState();
  const [valid, setValid] = useState(true);
  const [city, setCity] = useState('');

  function convertF(celcius) {
    return Math.round(celcius * (9.0 / 5) + 32);
  }

  function setWeather(data) {
    if (data.cod === '404' || city === '') {
      setValid(false);
    } else {
      setValid(true);
      setTemp(convertF(data.main.temp));
      setHighTemp(convertF(data.main.temp_max));
      setLowTemp(convertF(data.main.temp_min));
      setImg(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    }
  }
  if (city === '') {
    return <IncorrectData city={setCity} />;
  }
  const api = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=91ed74c2909e6d1d05ef3dd5569b5de2`
  )
    .catch(() => {})
    .then((response) => response.json())
    .then((data) => setWeather(data));

  if (valid === false) {
    return <IncorrectData city={setCity} />;
  }

  return (
    <div className="weather">
      <p className="cityName">
        Weather in {city.substring(0, 1).toUpperCase() + city.substring(1).toLowerCase()}
      </p>
      <h2 className="temp">{temp}˚F</h2>
      <div className="moreInfo">
        <img src={img} alt="" width="53%" />
        <p className="minmax">
          {highTemp}˚F / {lowTemp}˚F
        </p>
      </div>
    </div>
  );
}
