import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assests/logo.png';

const Header = () => {
  return (
    <div className=''> 
    <nav className=' flex flex-row  justify-center items-center p-1 text-white  rounded-lg '>
      <div className="w-[97px]">
        <Link to="/"><img className="object-contain h-full" src={img} alt="CultureConnect" /></Link>
      </div>

      <div className=''>
        <ul className="flex space-x-4">
          <li className='hover:text-orange-500'><Link to="/login">Login</Link></li>
          <li className='hover:text-orange-500'><Link to="/signup">Signup</Link></li>
          <li className='hover:text-orange-500'><Link to="/virtual-tour">Virtual Tour</Link></li>
          <li className='hover:text-orange-500'><Link to="/language-practice">Language Practice</Link></li>
          <li className='hover:text-orange-500'><Link to="/cultural-stories">Cultural Stories</Link></li>
          <li className='hover:text-orange-500'><Link to="/cultural-stories">Cultural Shows</Link></li>
          <li className='hover:text-orange-500'><Link to="/shop">Shop</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Header;
