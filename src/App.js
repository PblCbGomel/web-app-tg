import "./App.css";
import { useEffect } from "react";
import { MainPage } from "./pages/main-page";
import { Route, Routes, BrowserRouter } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
