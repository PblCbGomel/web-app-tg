import "./character.css";
import { useContext, useEffect } from "react";
import { ScoreContext } from "../score-context/score-context";

export function Character() {
  const { energy, coins, setEnergy, setCoins } = useContext(ScoreContext);

  let energyToUpdate = 0;
  let coinsToUpdate = 0;

  function updateDataOnServer() {
    //запрос для изменения количества энергии и монеток на energyToUpdate coinsToUpdate
  }

  const intervalUpdate = setInterval(updateDataOnServer, 1000);

  const handleOnclick = () => {
    energyToUpdate++;
    coinsToUpdate++;
    setEnergy(energy + 1);
    setCoins(coins + 1);
  };

  useEffect(() => {
    return () => {
      updateDataOnServer();
      clearInterval(intervalUpdate);
    };
  });

  return <div className="character" onClick={handleOnclick}></div>;
}
