/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "fade-in-up-delay-1": "fadeInUp 0.8s ease 0.3s forwards",
        "fade-in-up-delay-2": "fadeInUp 0.8s ease 0.6s forwards",
        "fade-in-up-delay-3": "fadeInUp 0.8s ease 0.9s forwards",
      },
    },
  },
  plugins: [],
};
