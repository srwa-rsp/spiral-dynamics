import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Spiral Test' },
    { id: 3, text: 'AI Assistant' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-16 w-full mx-auto px-4 mb-10 text-white'>
      <h1 className=' w-fit text-3xl font-bold bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] text-transparent bg-clip-text'>Spiral Dynamics</h1>
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='px-4 py-2 hover:bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] rounded-xl m-2 cursor-pointer duration-300 hover:text-black whitespace-nowrap'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] text-transparent bg-clip-text m-4'>Spiral Dynamics</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='border-b rounded-xl px-4 py-2 hover:bg-gradient-to-r from-[#c6ba6a] to-[#57bccc] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;