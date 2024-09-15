import React from 'react';
import { CiLinkedin } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center justify-center px-5 py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-black" id='header'>
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left max-w-md text-gray-200 px-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Hi!</h1>
        <p className="text-lg md:text-2xl mb-6 leading-relaxed">
          I'm <span className="font-bold text-white">Hemapriya</span>, a passionate and motivated Full Stack Developer specializing in the MERN (MongoDB, Express, React, Node.js) stack.
        </p>

       
        <a
          href="https://www.linkedin.com/in/hemapriya-k-4536a730b/"
          className="inline-flex items-center bg-indigo-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-600 transition duration-300 shadow-lg"
        >
          <CiLinkedin className="text-2xl mr-2" /> 
          Get in Touch
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mx-auto p-4">
        <img 
          src="hema.gif" 
          alt="Hemapriya" 
          className="w-full rounded-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out p-5"
        />
      </div>
    </section>
  );
};

export default Hero;
