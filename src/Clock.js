import React from "react";

function Clock({ hourRatio, minuteRatio, secondRatio }) {

  return (
    <div className="clock">
      <div
        className="hand hour"
        style={{ transform: `translate(-50%) rotate(${hourRatio * 360}deg)` }}
      ></div>
      <div
        className="hand minute"
        style={{ transform: `translate(-50%) rotate(${minuteRatio * 360}deg)` }}
      ></div>
      <div
        className="hand second"
        style={{ transform: `translate(-50%) rotate(${secondRatio * 360}deg)` }}
      ></div>

      <div className="number number1"></div>
      <div className="number number2"></div>
      <div className="number number3"></div>
      <div className="number number4"></div>
      <div className="number number5"></div>
      <div className="number number6"></div>
      <div className="number number7"></div>
      <div className="number number8"></div>
      <div className="number number9"></div>
      <div className="number number10"></div>
      <div className="number number11"></div>
      <div className="number number12"></div>
    </div>
  );
}

export default Clock;
