import { useState } from "react";

function ScoreCard() {

  const [score, setScore] = useState(82);

  function increaseScore() {

    if (score < 100) {
      setScore(score + 1);
    }

  }

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Financial Health Score
      </h2>

      <p className="text-6xl font-bold text-blue-700">
        {score}
      </p>
      <p className="text-gray-500 mt-2">
  Your financial health is improving!
</p>

<div className="mt-6">

  <div className="bg-gray-200 rounded-full h-3">

    <div
      className="bg-blue-600 h-3 rounded-full transition-all duration-500"
      style={{ width: `${score}%` }}
    ></div>

  </div>

</div>

      <button
        onClick={increaseScore}
        className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
      >
        Improve Score
      </button>

    </div>

  );
}

export default ScoreCard;