import React from 'react';

const Navbar = () => {

  return (
    <nav className="bg-black text-white">
      <ul className='py-4 px-28 flex space-x-11 justify-end'>
        <li className='mx-2 cursor-pointer'>Home</li>
        <li className='mx-2 cursor-pointer'>About</li>
        <li className='mx-2 cursor-pointer'>Resume</li>
        <li className='mx-2 cursor-pointer'>Services</li>
        <li className='mx-2 cursor-pointer'>Portfolio</li>
        <li className='mx-2 cursor-pointer'>Contact</li>
      </ul>
    </nav>
  );
};  

export default Navbar;
