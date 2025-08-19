import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SchedulePlanner from "./Components/SchedulePlanner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SchedulePlanner" element={<SchedulePlanner />}
    </Routes>
  );
}

export default App;
