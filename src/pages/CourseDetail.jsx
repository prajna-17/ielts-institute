import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const courseDetails = [
  {
    id: "general-ielts",
    title: "General IELTS",
    fullDesc: `General IELTS focuses on practical English skills across all four modules:

1. Listening: Everyday conversations and announcements.
2. Reading: Comprehension of letters, ads, and instructions.
3. Writing: Task 1 & 2 letters, reports, and essays.
4. Speaking: Real-life conversation practice.

Includes mock tests, strategies, and practice exercises.`,
  },
  {
    id: "academic-ielts",
    title: "Academic IELTS",
    fullDesc: `Academic IELTS prepares students for university admission:

1. Listening: Academic lectures and conversations.
2. Reading: University-level passages.
3. Writing: Data interpretation and essays.
4. Speaking: Academic discussions and presentations.

Includes mock tests, AI scoring, and expert feedback.`,
  },
  {
    id: "fast-track",
    title: "Fast-Track IELTS",
    fullDesc: `Fast-Track IELTS is a 4-week intensive course:

1. Daily practice for all modules.
2. Weekly mock tests with instant feedback.
3. Personalized focus on weak areas.
4. Tips for rapid improvement.`,
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const course = courseDetails.find((c) => c.id === id);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!course)
    return (
      <p className="text-center mt-20 text-gray-800 dark:text-gray-200">
        Course not found!
      </p>
    );

  return (
    <section className="py-20 px-6 md:px-16 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <button
        onClick={() => navigate("/courses")}
        className="mb-8 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        Back to Courses
      </button>

      <div
        className={`transition-all duration-1000 transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          {course.title}
        </h2>
        <pre className="text-gray-700 dark:text-gray-300 text-lg whitespace-pre-wrap">
          {course.fullDesc}
        </pre>
      </div>
    </section>
  );
};

export default CourseDetail;
