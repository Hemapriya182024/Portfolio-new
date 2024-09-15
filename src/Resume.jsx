import React from 'react';

const Resume = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-5 " id='resume'>
      
      {/* Resume GIF Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        <img 
          src="https://cdn.dribbble.com/users/650464/screenshots/5932778/media/6af1577945fe540c1c19fd9e13e959f1.gif" 
          alt="Resume GIF" 
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Download Resume Button Section */}
      <div className="w-full md:w-1/2 justify-center ">
      <h1 className='text-5xl font-extrabold mb-6'>Resume</h1>
        <a 
          href="/path-to-your-resume.pdf" 
          download 
          className="bg-indigo-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-600 transition duration-300 shadow-lg"
        >
          Download My Resume
        </a>
      </div>
      
    </section>
  );
}

export default Resume;
