import "./App.css";
import { useEffect } from "react";
import { MainPage } from "./pages/main-page";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Shop } from "./pages/shop";
import { Frens } from "./pages/frens";
import { Tasks } from "./pages/tasks";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/frens" element={<Frens />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
