import LearningCard from "../components/learning/LearningCard";

function LearningHub() {

  const courses = [

    {
      title: "Digital Banking",
      progress: 90,
    },

    {
      title: "UPI Security",
      progress: 60,
    },

    {
      title: "Budget Planning",
      progress: 40,
    },

    {
      title: "Investment Basics",
      progress: 20,
    },

  ];

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        📚 Learning Hub
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {courses.map((course, index) => (

          <LearningCard
            key={index}
            title={course.title}
            progress={course.progress}
          />

        ))}

      </div>

    </div>

  );

}

export default LearningHub;