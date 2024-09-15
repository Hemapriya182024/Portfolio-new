import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
  const [toggle, settoggle] = useState(false); 

  return (
    <div className='text-2xl' >
      <header className="flex justify-between px-5 py-3 bg-primary text-white">
        <a className='font-bold text-white' href="#">Hemapriya</a>
        
        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex'>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contacts</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        {toggle && (
          <nav className='block md:hidden mobile-nav'>
            <ul onClick={()=>settoggle(!toggle)} className='flex flex-col text-white'>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contacts</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            </ul>
          </nav>
        )}

        {/* Mobile menu button */}
        <button onClick={() => settoggle(!toggle)} className='block md:hidden'>
          <Bars3Icon className="size-6 text-white" />
        </button>
      </header>
     
    </div>
  );
}

export default Header;
