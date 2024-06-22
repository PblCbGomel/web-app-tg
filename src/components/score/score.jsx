import "./score.css";
import { useContext } from "react";
import { ScoreContext } from "../score-context/score-context";
s;
export function Score() {
  const { energy, coins } = useContext(ScoreContext);
  return (
    <div className="score-wrapper">
      <div className="score-item">
        <img src="./images/energy.png" className="score-image" />
        <p className="score-info">{energy}</p>
      </div>
      <div className="score-item">
        <img src="./images/money.png" className="score-image" />
        <p className="score-info">{coins}</p>
      </div>
    </div>
  );
}
