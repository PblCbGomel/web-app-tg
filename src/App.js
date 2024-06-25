import "./App.css";
import { useEffect } from "react";
import { MainPage } from "./pages/main-page";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Shop } from "./pages/shop";
import { Friends } from "./pages/friends";
import { Tasks } from "./pages/tasks";
import { NavigationMenu } from "./components/navigation/navigation";

export const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <div className="mainWrapper">
          <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/frens" element={<Friends />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <NavigationMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
