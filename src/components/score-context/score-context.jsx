import React, { useEffect, createContext, useState } from "react";

export const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [energy, setEnergy] = useState(0);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    //получить данные с сервера для energy и coins
  });

  return (
    <ScoreContext.Provider
      value={{
        energy: energy,
        coins: coins,
        setEnergy: setEnergy,
        setCoins: setCoins,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}
