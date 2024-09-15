import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary p-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Footer Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Hemapriya | All Rights Reserved.</p>
        </div>

        {/* GitHub Link */}
        <div>
          <a 
            href="https://github.com/Hemapriya182024" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-indigo-500 transition duration-300"
          >
            https://github.com/Hemapriya182024
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
