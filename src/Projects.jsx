import React from 'react';

const Projects = () => {
  return (
    <section className='relative flex flex-col md:flex-row py-20 px-5 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white' id='project'>
      
      {/* Title Section */}
      <div className='w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left px-5'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6'>Projects</h1>
        <p className='text-lg md:text-xl leading-relaxed'>
          Here are some of the projects I’ve worked on. Each project showcases my skills and my approach to solving real-world problems.
        </p>
      </div>

      {/* Image Section with Hover Effect */}
      <div className='w-full md:w-1/2 flex justify-center px-5 relative'>
        <a 
          href="https://mern-project-liart.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='relative group'
        >
          <img 
            className='h-auto max-w-full rounded-lg shadow-lg cursor-pointer'
            src="Airbnb.PNG"
            alt="Airbnb Project" 
          />
          <div className='absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
            <p className='text-white text-center px-4 py-2'>
              <strong>Airbnb Clone:</strong> This project allows users to <strong>login</strong>, <strong>register</strong>, <strong>book places</strong>, and <strong>cancel</strong> their bookings. It provides a user-friendly interface to manage bookings and view available listings.
              click to see live demo
            </p>
          </div>
        </a>
      </div>
      
    </section>
  );
}

export default Projects;
