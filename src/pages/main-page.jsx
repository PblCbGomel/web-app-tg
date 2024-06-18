import { Character } from "../components/character/character";
import { MainHeader } from "../components/main-header/main-header";
import { Score } from "../components/score/score";
import "./pages.css";

function CharacterWrapper() {
  return (
    <div className="character-wrapper">
      <MainHeader />
      <Score />
      <Character />
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
