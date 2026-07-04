import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import GoalPlanner from "./pages/GoalPlanner";
import LearningHub from "./pages/LearningHub";

function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Goal Planner */}
      <Route path="/goal-planner" element={<GoalPlanner />} />

      {/* Learning Hub */}
      <Route path="/learning-hub" element={<LearningHub />} />
    </Routes>
  );
}

export default App;