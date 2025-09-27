import React, { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Speaking Practice",
    desc: "Get real-time feedback to improve your speaking.",
    icon: (
      <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    ),
  },
  {
    title: "Mock Tests",
    desc: "Simulate real IELTS exams to track your progress.",
    icon: (
      <AcademicCapIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    ),
  },
  {
    title: "AI Band Score",
    desc: "AI evaluates your writing & speaking scores instantly.",
    icon: <ChartBarIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Study Material",
    desc: "Access curated resources for every skill.",
    icon: (
      <ComputerDesktopIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    ),
  },
];

const Features = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-6 md:px-16 py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <h3
        className={`text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center transition-all duration-1000 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Our Features
      </h3>

      <div className="grid md:grid-cols-4 gap-6">
        {features.map((f, index) => (
          <div
            key={index}
            className={`p-6 border rounded-xl shadow-sm bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:translate-y-2 transform transition-all duration-700 ease-out ${
              show
                ? `opacity-100 translate-y-0 delay-${(index + 1) * 200}`
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4">{f.icon}</div>
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {f.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
