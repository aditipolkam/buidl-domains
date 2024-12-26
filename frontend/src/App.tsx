import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";

import Home from "./components/Home.tsx";
import Claim from "./components/Claim.tsx";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/claim" element={<Claim />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
