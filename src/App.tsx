import React, { useState } from "react";

import CalculateTimer from "./Timer";
import Controls from "./Controls";
import "./App.css";

const App = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | String>>([]);

  React.useEffect(() => {
    let timeArray: (number | String)[] = CalculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <main>
      <div className="time-container">
        <p className="timer-text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[2]}</p>
      </div>
      <Controls setTimeInSeconds={setTimeInSeconds} />
    </main>
  );
};

export default App;
