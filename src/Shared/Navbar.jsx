import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'
import { AuthContext } from '../Provider/AuthProvider';
  

const Navbar = () => {
    const {user}=useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='bg-orange-400 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          <span className='ml-2 text-white italic text-3xl font-bold tracking-wide'>
            Chefzzzz Tray
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex  text-white font-bold text-xl'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-blue-800 italic' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/register'
              className={({ isActive }) => (isActive ? 'text-blue-800 italic' : '')}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'text-blue-800 italic' : '')}
            >
             Blog
            </NavLink>
          </li>
          
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-white' />
          </button>
          {menuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                       <span className='ml-2 text-xl font-bold tracking-wide text-orange-400 uppercase'>
                        Chefzzz Tray
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-orange-400' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='ms-6 space-y-4  text-orange-400'>
                    <li>
                      <Link to='/' className='font-medium tracking-wide text-orange-400 transition-colors duration-200 hover:text-blue-800'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/register'
                        className='font-medium tracking-wide text-orange-400 transition-colors duration-200 hover:text-blue-800'                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-orange-400 transition-colors duration-200 hover:text-blue-800'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Navbar;