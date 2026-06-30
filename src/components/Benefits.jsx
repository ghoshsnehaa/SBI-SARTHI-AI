import {
  Target,
  BrainCircuit,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: <Target size={32} />,
    title: "Set Your Goal",
    description:
      "Tell Sarthi what you want to achieve—buy a home, save for education, or build an emergency fund.",
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "AI Analysis",
    description:
      "Our Agentic AI understands your profile, income, and spending behaviour.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Smart Recommendations",
    description:
      "Receive personalized savings plans, SBI products, and financial learning recommendations.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Track Progress",
    description:
      "Monitor your financial health score and achieve your goals with confidence.",
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          How SBI Sarthi AI Works
        </h2>

        <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
          Your journey from financial planning to financial success in four
          simple AI-powered steps.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="text-center p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
            >

              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-700">
                {step.icon}
              </div>

              <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center mx-auto -mt-3">
                {index + 1}
              </div>

              <h3 className="font-bold text-xl mt-6">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;