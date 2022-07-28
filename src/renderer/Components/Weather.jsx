import { useState, useEffect } from 'react';
import { doc, query, collection, where, getDocs, updateDoc, onSnapshot } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from "../firebase";
import '../Styles/Weather.css';

const IncorrectData = () => {
  return (
    <div className="weather noloc">
      <h2 className="noLocation">Weather Unable to be Loaded</h2>
    </div>
  );
};

export default function Weather() {
  const [temp, setTemp] = useState();
  const [highTemp, setHighTemp] = useState();
  const [lowTemp, setLowTemp] = useState();
  const [img, setImg] = useState();
  const [valid, setValid] = useState(false);
  const [currUser] = useAuthState(auth);
  const [theLoc, setLoc] = useState();

  useEffect(() => {
    const func = async () => {
      await getUserLoc();
    }

    func()

  }, [currUser])


  const getUserLoc = async () => {
    if (currUser == null) {
      return;
    }
    try {
      const q = query(
        collection(db, 'users'),
        where('uid', '==', currUser?.uid)
      );
      const userDoc = await getDocs(q);
      const userID = userDoc.docs[0].id;
      const unsub = onSnapshot(doc(db, "users", userID), (doc) => {
        if (doc.data().location !== 'None') {
          fetchWeather(doc.data().location);

        }

      })

    } catch (err) {
      console.log(err);
      alert('An error had occurred while fetching the users name');
      return;

    }
  }

  function convertF(celcius) {
    return Math.round(celcius * (9.0 / 5) + 32);
  }

  function setWeather(data) {
    setLoc(data.name)
    if (data.cod === '404') {
      setValid(false);
    } else {
      setValid(true);
      setTemp(convertF(data.main.temp));
      setHighTemp(convertF(data.main.temp_max));
      setLowTemp(convertF(data.main.temp_min));
      setImg(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    }
  }

  const fetchWeather = (loc) => {

    if (loc.indexOf(",") === -1) {
      const api = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=91ed74c2909e6d1d05ef3dd5569b5de2`
      )
        .catch(() => { })
        .then((response) => response.json())
        .then((data) => setWeather(data));
    } else {
      let lat = loc.substring(0, loc.indexOf(",")).trim()
      let lon = loc.substring(loc.indexOf(",") + 1).trim()
      const api = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=91ed74c2909e6d1d05ef3dd5569b5de2`
      )
        .catch(() => { console.error("error") })
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }

  if (valid === false) {
    return <IncorrectData />;
  }

  return (
    <div className="weather">
      <p className="cityName">
        Weather in {theLoc}
      </p>
      <div className="tempInfo">
        <h2 className="temp">{temp}˚F</h2>
        <div className="moreInfo">
          <img src={img} alt="" width="53%" />
          <p className="minmax">
            {highTemp}˚F / {lowTemp}˚F
          </p>
        </div>
      </div>
    </div>
  );
}
