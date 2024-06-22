import "./character.css";
import { useContext } from "react";
import { ScoreContext } from "../score-context/score-context";

export function Character() {
  const { energy, coins, setEnergy, setCoins } = useContext(ScoreContext);

  const handleOnclick = () => {
    setEnergy(energy + 1);
    setCoins(coins + 1);
  };

  return <div className="character" onClick={handleOnclick}></div>;
}
