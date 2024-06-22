import { Character } from "../components/character/character";
import { MainHeader } from "../components/main-header/main-header";
import { Score } from "../components/score/score";
import "./pages.css";
import React from "react";
import { ScoreProvider } from "../components/score-context/score-context";

function CharacterWrapper() {
  return (
    <div className="character-wrapper">
      <ScoreProvider>
        <MainHeader />
        <Score />
        <Character />
      </ScoreProvider>
    </div>
  );
}

export function MainPage() {
  return (
    <>
      <CharacterWrapper />
    </>
  );
}
