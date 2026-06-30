import { ArrowRight } from "lucide-react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-5">
        {description}
      </p>

      {/* Learn More */}
      <button className="flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all">
        Learn More
        <ArrowRight size={18} />
      </button>

    </div>
  );
}

export default FeatureCard;