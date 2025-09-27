import React, { useEffect, useState } from "react";

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = "transition-all duration-700 ease-out transform";
  const hiddenState = "opacity-0 translate-y-10";

  return (
    <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <h2
        className={`text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 ${baseTransition} ${
          show ? "opacity-100 translate-y-0" : hiddenState
        }`}
      >
        Contact Us
      </h2>

      <p
        className={`text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 ${baseTransition} delay-200 ${
          show ? "opacity-100 translate-y-0" : hiddenState
        }`}
      >
        Have questions? Reach out to us.
      </p>

      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className={`w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-sm ${baseTransition} delay-400 ${
            show ? "opacity-100 translate-y-0" : hiddenState
          }`}
        />

        <input
          type="email"
          placeholder="Your Email"
          className={`w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-sm ${baseTransition} delay-600 ${
            show ? "opacity-100 translate-y-0" : hiddenState
          }`}
        />

        <textarea
          placeholder="Your Message"
          className={`w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-sm ${baseTransition} delay-800 ${
            show ? "opacity-100 translate-y-0" : hiddenState
          }`}
          rows="4"
        ></textarea>

        <button
          className={`w-full py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 shadow-lg ${baseTransition} delay-1000 ${
            show ? "opacity-100 translate-y-0" : hiddenState
          }`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
