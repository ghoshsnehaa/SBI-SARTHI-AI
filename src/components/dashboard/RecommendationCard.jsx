function RecommendationCard() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Recommendation
      </h2>

      <div className="bg-blue-50 rounded-xl p-5">

        <p className="text-blue-700 font-semibold">
          Smart Suggestion
        </p>

        <p className="text-gray-700 mt-3">
          Increase your monthly savings by ₹2,000 to achieve your Home Loan goal
          approximately 6 months earlier.
        </p>

      </div>

    </div>
  );
}

export default RecommendationCard;