function LearningCard({ title, progress }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="font-semibold text-blue-700">
          {progress}%
        </p>

      </div>

      <div className="bg-gray-200 rounded-full h-3 mt-4">

        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

      <button className="mt-6 bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition">
        Continue Learning
      </button>

    </div>
  );
}

export default LearningCard;