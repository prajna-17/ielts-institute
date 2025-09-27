import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const courseDetails = [
  {
    id: "general-ielts",
    title: "General IELTS",
    desc: "Perfect for practical English skills, ideal for migration.",
    fullDesc: `
General IELTS focuses on practical English skills across all four modules:

1. Listening: Learn strategies to understand everyday English in conversations and announcements.
2. Reading: Improve comprehension skills for everyday texts, advertisements, and instructions.
3. Writing: Task 1 & 2: letters, reports, and essays tailored for migration.
4. Speaking: Simulated real-life conversations to build fluency.

With expert guidance, mock tests, and practice exercises, you can aim for a high band score.`,
  },
  {
    id: "academic-ielts",
    title: "Academic IELTS",
    desc: "Comprehensive preparation for university aspirants.",
    fullDesc: `
Academic IELTS prepares you for higher education abroad:

1. Listening: Academic lectures, conversations, and note-taking skills.
2. Reading: University-level passages and analytical comprehension.
3. Writing: Task 1 & 2 essays, data interpretation, and argument writing.
4. Speaking: Academic discussions, presentations, and Q&A simulations.

Includes mock tests, AI feedback, and strategies to achieve target band scores.`,
  },
  {
    id: "fast-track",
    title: "Fast-Track IELTS",
    desc: "Crash course for quick results in 4 weeks.",
    fullDesc: `
Fast-Track IELTS is designed for rapid improvement:

1. Daily intensive sessions for all four modules.
2. Mock tests every week with instant feedback.
3. Tips & strategies for quick improvement.
4. Focus on weak areas with personalized guidance.

Ideal for working professionals or students with tight deadlines.`,
  },
];

const Courses = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = "transition-all duration-700 ease-out transform";
  const cardHoverEffect =
    "hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2";
  const hiddenState = "opacity-0 translate-y-10";

  return (
    <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <h2
        className={`text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-100 ${baseTransition} ${
          show ? "opacity-100 translate-y-0" : hiddenState
        }`}
      >
        Our Comprehensive IELTS Courses
      </h2>
      <p
        className={`text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 ${baseTransition} delay-200 ${
          show ? "opacity-100 translate-y-0" : hiddenState
        }`}
      >
        We provide customized IELTS training courses across all four modules.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courseDetails.map((course, index) => (
          <div
            key={course.id}
            className={`${baseTransition} p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg ${cardHoverEffect} ${
              show ? "opacity-100 translate-y-0" : hiddenState
            }`}
          >
            <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-400">
              {course.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{course.desc}</p>
            <button
              onClick={() => navigate(`/courses/${course.id}`)}
              className="mt-4 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
