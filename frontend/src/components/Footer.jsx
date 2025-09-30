import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-6 text-gray-500 text-sm">
      <p>
        || © {new Date().getFullYear()} MERN Todo App | CI/CD Pipeline Active 🚀||
      </p>
    </footer>
  );
};

export default Footer;
