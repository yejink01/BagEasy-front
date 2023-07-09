import React from "react";
import Purchase from "./pages/Purchase";
import Mypage from "./pages/Mypage";
import Start from "./pages/Start";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/start" element={<Start />} />
    </Routes>
  );
};


export default App;
