import React, { useRef, useEffect, useState } from "react";
import Circularbar from "./Circularbar";
import Linearbar from "./Linearbar";

function Progresswrapper({
  type,
  progressVal,
  time,
  strokeSize,
  containerSize,
  fontSize,
  color,
}) {
  let progress = useRef(0);
  const [progressState, setProgressState] = useState(progress.current);

  useEffect(() => {
    progress.current = 0;
    if(progressVal === 0) return;
    const progressInterval = setInterval(() => {
      progress.current = progress.current + 1;
      setProgressState(progress.current);
      if (progress.current >= progressVal) {
        clearInterval(progressInterval);
      }
    }, time);
    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, [progressVal, time]);

  const barElementSwitch = (type) => {
    switch (type) {
      case "circular":
        return (
          <Circularbar
            strokeWidth={strokeSize}
            sqSize={containerSize}
            percentage={progress.current}
            strokeSize={strokeSize}
            containerSize={containerSize}
            fontSize={fontSize}
            color={color}
          />
        );
      case "linear":
        return (
          <Linearbar
            strokeWidth={strokeSize}
            sqSize={containerSize}
            percentage={progress.current}
            strokeSize={strokeSize}
            containerSize={containerSize}
            fontSize={fontSize}
            color={color}
          />
        );
      default:
        return "";
    }
  };
  return (
    <div className="flex h-fit items-center justify-center">
      {barElementSwitch(type)}
    </div>
  );
}

export default Progresswrapper;

// call example:
{/* <Progresswrapper
            type="circular"
            progressVal={25}
            time={50}
            strokeSize={3}
            containerSize={100}
            color="green"
          /> */}
{/* <Progresswrapper
            type="linear"
            progressVal={100}
            time={50}
            strokeSize={20}
            containerSize={100}
            fontSize={16}
            color="green"
          /> */}
