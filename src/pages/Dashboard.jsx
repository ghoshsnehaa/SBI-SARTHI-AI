import {useContext} from "react";
import { GoalContext } from "../context/GoalContext";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import ScoreCard from "../components/dashboard/ScoreCard";
import GoalCard from "../components/dashboard/GoalCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import QuickActions from "../components/dashboard/QuickActions";
function Dashboard() {
  const {goals} =useContext(GoalContext);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
     <DashboardHeader/>
     <ScoreCard/>
     <div className="grid md:grid-cols-3 gap-6 mt-8">
      
 {goals.map((goal, index) => (

  <GoalCard
    key={index}
    emoji={goal.emoji}
    title={goal.name}
    progress={goal.progress}
    color={goal.color}
  />

))}
</div>
<div className="mt-8">
    <RecommendationCard />
</div>
<div className="mt-8">
    <QuickActions />
</div>

    </div>
  );
}

export default Dashboard;