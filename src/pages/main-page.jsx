import { Character } from "../components/character/character";
import { MainHeader } from "../components/main-header/main-header";

function CharacterWrapper() {
  return (
    <>
      <Character />
    </>
  );
}

export function MainPage() {
  return (
    <>
      <MainHeader />
      <CharacterWrapper />
    </>
  );
}
