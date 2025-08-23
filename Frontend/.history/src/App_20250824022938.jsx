import { useState, useRef } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import AuthForms from "./Components/AuthForms";
import SchedulePlanner from "./Components/SchedulePlanner";
import Topbar from "./Components/Topbar";

function App() {
  // Shared Topbar / Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  // Optional: refs for scrolling (Home-specific)
  const planFormRef = useRef(null);
  const reviewRef = useRef(null);
  const navigate = useNavigate
  const location = useLocation();

  const scrollToPlanForm = () => {
    if (location.pathname === "/") {
      // Already on Home: scroll to component
      planFormRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to Home and scroll after rendering
      console.log("Hi");
      navigate("/", { state: { scrollToPlanForm: true } });
    }
  
    // Close sidebar if open
    setIsSidebarOpen(false);
  };
  

  const scrollToReviews = () => {
    reviewRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsSidebarOpen(false);
  };

  return (
    <div className="app">
      {/* Topbar is outside Routes so it shows on all pages */}
      <Topbar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        onPlanTripClick={scrollToPlanForm} 
        onReviewClick={scrollToReviews} 
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home planFormRef={planFormRef} reviewRef={reviewRef} />} />
        <Route path="/auth" element={<AuthForms />} />
        <Route path="/schedule-planner" element={<SchedulePlanner />} />
      </Routes>

      {/* Optional overlay for sidebar */}
      {isSidebarOpen && (
        <div 
          className='overlay'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
