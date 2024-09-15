import React from 'react';

const About = () => {
    return (
        <section className='flex flex-col md:flex-row items-center justify-between px-10 py-20' id='about'>
            
            {/* Image Section */}
            <div className='w-full md:w-1/2 mb-10 md:mb-0'>
                <img 
                    src='https://media1.tenor.com/m/-6m2vqRjKDEAAAAC/geek-girl.gif' 
                    alt='Developer GIF' 
                    className='w-full h-auto rounded-lg shadow-lg' 
                />
            </div>

            {/* Text Section */}
            <div className='w-full md:w-1/2 flex flex-col justify-center p-3'>
                <h1 className='text-5xl font-extrabold mb-6'>About Me</h1>
                <p className='text-lg md:text-xl leading-relaxed'>
                    Hi, I’m <span className='font-bold text-indigo-400'>Hemapriya</span> – a driven and passionate Full Stack Developer specializing in the MERN stack.
                    I love bringing ideas to life through code, and I am always learning new technologies to improve my skills. Let’s connect and build something amazing together!
                </p>
            </div>
        </section>
    );
}

export default About;
