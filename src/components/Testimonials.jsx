import React, { useEffect, useState } from "react";

const testimonials = [
  { name: "Alice", text: "Thanks to IELTSPro, I scored 8.5 overall!" },
  {
    name: "Rahul",
    text: "The mock tests and feedback helped me improve quickly.",
  },
  { name: "Sofia", text: "Amazing teaching and AI scoring tools!" },
];

const Testimonials = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-6 md:px-16 py-16 bg-blue-50 dark:bg-gray-800 transition-colors duration-500">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">
        Student Testimonials
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-700 bg-white dark:bg-gray-900 ${
              show
                ? `opacity-100 translate-y-0 delay-${index * 200}`
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
              “{t.text}”
            </p>
            <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              - {t.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
