import { useState, useContext } from "react";
import { GoalContext } from "../context/GoalContext";

function GoalPlanner() {
  const [goalType, setGoalType] = useState("Home Loan");
  const [goalName, setGoalName] = useState("");
  const [monthlySaving, setMonthlySaving] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

  const { goals, setGoals } = useContext(GoalContext);

  const [editIndex, setEditIndex] = useState(null);

  // Load goals from Local Storage (runs once)
  

  function addGoal() {
    if (
      goalName.trim() === "" ||
      monthlySaving.trim() === "" ||
      targetAmount.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    const progress = Math.min(
      Math.round((Number(monthlySaving) / Number(targetAmount)) * 100),
      100
    );

    let emoji = "🎯";
    let color = "bg-blue-600";

    switch (goalType) {
      case "Home Loan":
        emoji = "🏠";
        color = "bg-blue-600";
        break;

      case "Car Fund":
        emoji = "🚗";
        color = "bg-green-500";
        break;

      case "Vacation":
        emoji = "✈️";
        color = "bg-purple-500";
        break;

      case "Education":
        emoji = "🎓";
        color = "bg-yellow-500";
        break;

      case "Medical":
        emoji = "🏥";
        color = "bg-red-500";
        break;

      case "Business":
        emoji = "💼";
        color = "bg-orange-500";
        break;

      case "Emergency Fund":
        emoji = "🚨";
        color = "bg-pink-500";
        break;

      default:
        emoji = "🎯";
        color = "bg-blue-600";
    }

    const newGoal = {
      type: goalType,
      name: goalName,
      saving: monthlySaving,
      target: targetAmount,
      progress,
      emoji,
      color,
    };

    if (editIndex !== null) {
      const updatedGoals = [...goals];
      updatedGoals[editIndex] = newGoal;
      setGoals(updatedGoals);
      setEditIndex(null);
    } else {
      setGoals([...goals, newGoal]);
    }

    setGoalType("Home Loan");
    setGoalName("");
    setMonthlySaving("");
    setTargetAmount("");
  }

  function deleteGoal(indexToDelete) {
    const updatedGoals = goals.filter(
      (_, index) => index !== indexToDelete
    );

    setGoals(updatedGoals);
  }

  function editGoal(index) {
    const goal = goals[index];

    setGoalType(goal.type);
    setGoalName(goal.name);
    setMonthlySaving(goal.saving);
    setTargetAmount(goal.target);

    setEditIndex(index);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        🎯 Goal Planner
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-8 max-w-xl">

        {/* Goal Type */}

        <label className="font-semibold">
          Goal Type
        </label>

        <select
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 mt-2"
        >
          <option>Home Loan</option>
          <option>Car Fund</option>
          <option>Vacation</option>
          <option>Education</option>
          <option>Medical</option>
          <option>Business</option>
          <option>Emergency Fund</option>
        </select>

        {/* Goal Name */}

        <label className="font-semibold block mt-6">
          Goal Name
        </label>

        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          placeholder="Dream House"
          className="w-full border border-gray-300 rounded-xl p-3 mt-2"
        />

        {/* Monthly Saving */}

        <label className="font-semibold block mt-6">
          Monthly Saving (₹)
        </label>

        <input
          type="number"
          value={monthlySaving}
          onChange={(e) => setMonthlySaving(e.target.value)}
          placeholder="5000"
          className="w-full border border-gray-300 rounded-xl p-3 mt-2"
        />

        {/* Target Amount */}

        <label className="font-semibold block mt-6">
          Target Amount (₹)
        </label>

        <input
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          placeholder="500000"
          className="w-full border border-gray-300 rounded-xl p-3 mt-2"
        />

        {/* Live Preview */}

        <div className="mt-8 bg-blue-50 rounded-xl p-5">

          <h2 className="text-xl font-bold mb-4">
            Live Preview
          </h2>

          <p>
            📂 Type:
            <strong> {goalType}</strong>
          </p>

          <p className="mt-2">
            🎯 Goal:
            <strong> {goalName || "Not Entered"}</strong>
          </p>

          <p className="mt-2">
            💰 Monthly Saving:
            <strong> ₹{monthlySaving || 0}</strong>
          </p>

          <p className="mt-2">
            🏆 Target Amount:
            <strong> ₹{targetAmount || 0}</strong>
          </p>

        </div>

        <button
          onClick={addGoal}
          className="mt-8 w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
        >
          {editIndex !== null ? "Update Goal" : "Add Goal"}
        </button>

      </div>

      {/* Goal Cards */}

      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-6">
          My Goals
        </h2>

        {goals.length === 0 ? (
          <p className="text-gray-500">
            No goals added yet.
          </p>
        ) : (
          <div className="space-y-5">

            {goals.map((goal, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6"
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {goal.emoji} {goal.name}
                    </h3>

                    <p className="text-gray-500">
                      {goal.type}
                    </p>

                    <p className="mt-3">
                      💰 Monthly Saving: ₹{goal.saving}
                    </p>

                    <p className="mt-2">
                      🎯 Target Amount: ₹{goal.target}
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <button
                      onClick={() => editGoal(index)}
                      className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteGoal(index)}
                      className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
                    >
                      Delete
                    </button>

                  </div>

                </div>

                <div className="mt-6">

                  <div className="bg-gray-200 rounded-full h-3">

                    <div
                      className={`${goal.color} h-3 rounded-full`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>

                  </div>

                  <p className="mt-2 text-sm text-gray-600">
                    {goal.progress}% Completed
                  </p>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default GoalPlanner;