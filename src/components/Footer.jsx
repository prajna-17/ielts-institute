import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold text-white">IELTSPro</h2>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
          <li className="hover:text-white cursor-pointer">Privacy</li>
        </ul>
      </div>
      <p className="text-center text-sm mt-6">
        © 2025 IELTSPro. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
