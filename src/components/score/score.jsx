import "./score.css";

export function Score() {
  return (
    <div className="score-wrapper">
      <div className="score-item">
        <img src="./images/energy.png" className="score-image" />
        <p className="score-info">000,012</p>
      </div>
      <div className="score-item">
        <img src="./images/money.png" className="score-image" />
        <p className="score-info">000,432</p>
      </div>
    </div>
  );
}
