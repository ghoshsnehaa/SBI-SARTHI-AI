

import actions from "../../data/actions";
function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-3 gap-4">

        <button className="bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
          🎯 Create Goal
        </button>

        <button className="bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition">
          📚 Learn
        </button>

        <button className="bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition">
          🤖 AI Chat
        </button>

      </div>

    </div>
  );
}

export default QuickActions;