function GoalCard({ emoji, title, progress, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="flex justify-between items-center">

        <h3 className="text-xl font-semibold">
          {emoji} {title}
        </h3>

        <span className="font-bold text-gray-600">
          {progress}%
        </span>

      </div>

      <div className="bg-gray-200 rounded-full h-3 mt-4">

        <div
          className={`h-3 rounded-full ${color}`}
          style={{ width: `${progress}%` }}
        ></div>

      </div>

    </div>
  );
}

export default GoalCard;