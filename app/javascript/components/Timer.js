import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

const Timer = (props) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  useEffect(() => {
    if (props.gameOver) {
      pause();
      if (minutes > 0) {
        let minToSec = 60 / minutes;
        props.setFinishTime(minToSec + seconds);
      } else props.setFinishTime(seconds);
    }
  });

  return (
    <div>
      {props.gameOver && (
        <div>
          <div>The End</div>
        </div>
      )}
      <div>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
