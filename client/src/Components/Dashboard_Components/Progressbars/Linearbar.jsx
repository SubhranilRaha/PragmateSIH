import React from "react";

function Linearbar({
  strokeWidth = 20,
  percentage = 0,
  fontSize = 16,
  color = "red",
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex justify-end font-semibold">
        <span
          style={{
            fontSize: `${fontSize}px`,
            color: `${color}`,
          }}
          className="grow"
        >
          progress
        </span>
        <span
          style={{
            fontSize: `${fontSize}px`,
            color: `${color}`,
          }}
        >
          {percentage}%
        </span>
      </div>
      <div
        className="flex w-full items-center justify-start rounded-full border bg-gray-100"
        style={{
          height: `${strokeWidth}px`,
        }}
      >
        <div
          className={`m-1 rounded-full border`}
          style={{
            width: `${percentage}%`,
            height: `${strokeWidth - 6}px`,
            backgroundColor: `${color}`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Linearbar;
