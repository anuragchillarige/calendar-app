import { useState, useEffect } from 'react';

export default function Time() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const d = new Date();
      let hr = d.getHours();
      let min = d.getMinutes();
      let stateOfDay = 'AM';

      if (hr > 12) {
        hr -= 12;
        stateOfDay = 'PM';
      }
      if (min < 10) min = `0${min}`;

      setTime(`${hr}:${min} ${stateOfDay}`);
    }, 100);
  });

  return <p className="time">{time}</p>;
}
