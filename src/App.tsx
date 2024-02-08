// App.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import CoinFlip from "./Pages/CoinFlip";
import ItemUpgrader from "./Pages/ItemUpgrader";
import Roulette from "./Pages/Roulette";
import CrashGame from "./Pages/CrashGame";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/casino-games/coinflip" element={<CoinFlip />} />
        <Route path="/casino-games/itemupgrader" element={<ItemUpgrader />} />
        <Route path="/casino-games/roulette" element={<Roulette />} />
        <Route path="/casino-games/crashgame" element={<CrashGame />} />
      </Routes>
    </div>
  );
};

export default App;
