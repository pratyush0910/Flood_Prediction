

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8 my-[6.7rem]  ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="animate__animated animate__fadeInLeft">
          <h2 className="text-xl font-bold mb-2">Company Name</h2>
          <p className="text-sm">A brief description of the company goes here.</p>
        </div>
        <div className="flex items-center animate__animated animate__fadeInRight">
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/about" className="mr-4">
            About
          </a>
          <a href="/contact" className="mr-4">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

