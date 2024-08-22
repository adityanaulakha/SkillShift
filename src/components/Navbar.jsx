import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/navbar-logo.png';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}
      border-b border-gray-200`}>
      <div className='flex justify-between items-center px-4 py-3 md:px-6 lg:px-10'>
        {/* Logo */}
        <div className='flex items-center'>
          <a href="#"><img src={logo} alt="Logo" className='w-32 md:w-36 lg:w-44 h-auto' /></a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-6 lg:space-x-10 text-black'>
          <ul className='flex space-x-6 lg:space-x-10'>
            <li className='relative' ref={dropdownRef}>
              <button 
                onClick={toggleDropdown} 
                className='font-medium hover:text-[#7B2CBF] flex items-center focus:outline-none'>
                Categories <FaChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <ul className='absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
                  <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Web Development</a></li>
                  <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Programming and Tech</a></li>
                  <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Graphic Designing</a></li>
                  <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Video Editing</a></li>
                  <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Digital Marketing</a></li>
                  <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Content Writing</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className='font-medium hover:text-[#7B2CBF]'>Road Maps</a></li>
            <li><a href="#" className='font-medium hover:text-[#7B2CBF]'>Tutorials</a></li>
            <li><a href="#" className='font-medium hover:text-[#7B2CBF]'>Sign In</a></li>
            <li>
              <a href="#" 
                 className='font-medium text-[#04E762] bg-[#FCFCFF] border-2 border-[#04E762] px-6 py-2 rounded-lg hover:text-[#FCFCFF] hover:bg-[#04E762] transition-colors duration-200'>
                Join
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className='md:hidden text-2xl text-black'>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 md:hidden'>
          <div className='flex flex-col items-center py-10'>
            <ul className='flex flex-col space-y-6 text-black'>
              <li className='relative' ref={dropdownRef}>
                <button 
                  onClick={toggleDropdown} 
                  className='font-medium hover:text-[#7B2CBF] flex items-center'>
                  Categories <FaChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen && (
                  <ul className='mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Web Development</a></li>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Programming and Tech</a></li>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Graphic Designing</a></li>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Video Editing</a></li>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Digital Marketing</a></li>
                    <li className='px-4 py-2 hover:bg-gray-100 hover:text-[#7B2CBF]'><a href="#">Content Writing</a></li>
                  </ul>
                )}
              </li>
              <li><a href="#" className='font-medium hover:text-[#7B2CBF]'>Road Maps</a></li>
              <li><a href="#" className='font-medium hover:text-[#7B2CBF]'>Tutorials</a></li>
              <li><a href="#" className='font-medium hover:text-[#7B2CBF]'>Sign In</a></li>
              <li>
                <a href="#" 
                   className='font-medium text-[#04E762] bg-[#FCFCFF] border-2 border-[#04E762] px-6 py-2 rounded-lg hover:text-[#FCFCFF] hover:bg-[#04E762] transition-colors duration-200'>
                  Join
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
