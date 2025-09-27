import React, { useEffect, useState } from "react";

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-16 px-6 md:px-16 py-12 flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 dark:from-gray-800 to-white dark:to-gray-900 transition-colors duration-500 min-h-[70vh]">
      <div
        className={`flex-1 text-center md:text-left transition-all duration-700 transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100 leading-snug mb-4">
          Crack <span className="text-blue-600 dark:text-blue-400">IELTS</span>{" "}
          with Confidence 🚀
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Join thousands of achievers who secured their dream scores with expert
          coaching and practice.
        </p>
        <a href="/courses">
          <button className="px-8 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transform hover:scale-105 transition duration-300">
            Get Started
          </button>
        </a>
      </div>

      <div
        className={`flex-1 mt-8 md:mt-0 transition-all duration-700 transform ${
          show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60"
          alt="Study IELTS"
          className="rounded-lg shadow-2xl transform transition duration-500 md:hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
