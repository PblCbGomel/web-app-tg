import React, { useEffect, useState } from "react";
import "./main-header.css";

const tg = window.Telegram.WebApp;

export function MainHeader() {
  const [streak, setStreak] = useState(0);
  const [kkal, useKkal] = useState(0); //потом приделать kkal мб надо будет через контекст, т.к. эта инфа получается из еды на фото (но я не уверен)

  useEffect(() => {
    //запрос для получения streak
  });

  return (
    <header>
      <div className="user-info">
        <img
          width="65"
          height="65"
          src={tg?.initDataUnsafe?.user?.photo_url || "./images/photo.webp"}
          className="user-photo"
        />
        {tg?.initDataUnsafe?.user?.username || "UserName"}
      </div>
      <div className="streak">
        <div>{streak}</div>
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
