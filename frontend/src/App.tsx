import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.tsx";

import Home from "./routes/Home.tsx";
import Claim from "./routes/Claim.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import Profile from "./routes/Profile.tsx";
import Discover from "./routes/Discover.tsx";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
