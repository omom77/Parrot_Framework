import React from 'react';
import cube_logo from '../media/cube_logo.svg';

const Navbar = () => {
  return (
    <div className='m-4 flex justify-between items-center px-6 py-2 bg-gradient-to-r from-customPurple to-customBlue rounded-full'>
      <img src={cube_logo} alt="description" className="h-6 w-auto" />
      
      <h3 className='text-white chakra-petch-regular text-center'>PARROT</h3>
    </div>
  );
}

export default Navbar;
