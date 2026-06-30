import FeatureCard from "./FeatureCard";

import {
  Target,
  Brain,
  Lightbulb,
  BookOpen,
} from "lucide-react";

function Features() {

  const features = [
    {
      icon: <Target size={28} />,
      title: "Goal Planning",
      description:
        "Create personalized savings and investment goals with AI guidance.",
    },
    {
      icon: <Brain size={28} />,
      title: "AI Financial Insights",
      description:
        "Understand your financial health through smart AI-powered analysis.",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Smart Recommendations",
      description:
        "Receive customized suggestions based on your spending and goals.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Digital Learning Hub",
      description:
        "Learn UPI, YONO, cyber safety and digital banking in one place.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Powerful Features
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Everything you need to improve financial literacy,
            achieve your goals, and confidently use digital banking.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <FeatureCard

              key={feature.title}

              icon={feature.icon}

              title={feature.title}

              description={feature.description}

            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;