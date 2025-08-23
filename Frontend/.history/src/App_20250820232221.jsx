import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/AuthForms";
import SchedulePlanner from "./Components/SchedulePlanner";
import AuthForms from "./Components/AuthForms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login-signup" element={<AuthForms />} />
      <Route path="/schedule-planner" element={<SchedulePlanner />} />
    </Routes>
  );
}

export default App;
