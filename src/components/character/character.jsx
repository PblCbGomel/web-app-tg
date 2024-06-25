import "./character.css";
import { useContext, useEffect } from "react";
import { ScoreContext } from "../score-context/score-context";

let newEnergy;
let newCoins;

export function Character() {
  const { energy, coins, setEnergy, setCoins } = useContext(ScoreContext);

  const updateDataOnServer = () => {
    //запрос для изменения количества энергии и монеток на energy, coins
    //типа fetch(url, {data: {newCoins: coins, newEnergy: energy}})
    console.log(newEnergy, newCoins); //прст пока каждую секунду отправляет в консось инфу
  };

  const handleOnclick = () => {
    newEnergy++;
    newCoins++;
    setEnergy(energy + 1);
    setCoins(coins + 1);
  };

  useEffect(() => {
    newEnergy = energy;
    newCoins = coins;
    const intervalUpdate = setInterval(updateDataOnServer, 1000);

    return () => {
      setTimeout(updateDataOnServer, 0);
      clearInterval(intervalUpdate);
    };
  }, []);

  return <div className="character" onClick={handleOnclick}></div>;
}
