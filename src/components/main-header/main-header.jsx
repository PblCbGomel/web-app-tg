import React from "react";
import "./main-header.css";

const tg = window.Telegram.WebApp;

export function MainHeader() {
  return (
    <header>
      <div className="user-info">
        <img
          width="65"
          height="65"
          src="./images/photo.webp"
          className="user-photo"
        />
        {tg?.initDataUnsafe?.user?.username || "UserName"}
      </div>
      <div className="streak">
        <div>000</div>
      </div>
      <div className="goal">
        <img
          width="65"
          height="65"
          src="./images/goal.webp"
          className="goal-photo"
        />
        <div>Pump UP</div>
      </div>
      <div className="kkal-fire">
        <div>0000</div>
      </div>
    </header>
  );
}
