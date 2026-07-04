import { createContext, useState,useEffect } from "react";

export const GoalContext = createContext();

function GoalProvider({ children }) {

  const [goals, setGoals] = useState([]);
  

useEffect(() => {
  console.log("Reading from Local Storage...");

  const savedGoals = localStorage.getItem("goals");

  console.log("Raw value:", savedGoals);

  if (savedGoals) {
    const parsedGoals = JSON.parse(savedGoals);

    console.log("Parsed goals:", parsedGoals);

    setGoals(parsedGoals);
  }
}, []);
useEffect(() => {
  console.log("Saving goals:", goals);

  localStorage.setItem("goals", JSON.stringify(goals));
}, [goals]);
  return (

    <GoalContext.Provider
      value={{
        goals,
        setGoals,
      }}
    >
      {children}
    </GoalContext.Provider>

  );

}

export default GoalProvider;