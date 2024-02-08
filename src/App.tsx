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
        <Route path="/coinflip" element={<CoinFlip />} />
        <Route path="/itemupgrader" element={<ItemUpgrader />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/crashgame" element={<CrashGame />} />
        {/* Route guard */}
        {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
};

export default App;
