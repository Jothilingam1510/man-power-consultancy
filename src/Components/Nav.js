// Nav.js
import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';

const Nav = () => {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [color, setColor] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleClick = () => setClick(!click);

  const handleMouseEnter1 = () => {
    setDropdown1(true);
  };

  const handleMouseLeave1 = () => {
    setDropdown1(false);
  };

  const handleMouseEnter2 = () => {
    setDropdown2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdown2(false);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    window.addEventListener('resize', handleResize);
    const smallScreenWidth = 1040;

    const handleScreenResize = () => {
      setScreenWidth(window.innerWidth);
  
      // If the screen width is less than the threshold, always show the dropdowns
      if (window.innerWidth <= smallScreenWidth) {
        setDropdown1(true);
        setDropdown2(true);
      } else {
        // If the screen width is greater than the threshold, handle normal hover behavior
        setDropdown1(false);
        setDropdown2(false);
      }
    };
  
    // Initial call to handle initial screen size
    handleScreenResize();
    return () => {
      window.removeEventListener('scroll', changeColor);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Adding empty dependency array to run the effect only once on mount

  // Condition to change the text based on screen width
  const headerText = screenWidth <= 600 ? 'AM CONSULTANCY' : 'ALAGAR MALAIYAN CONSULTANCY';

  const dropdownItems1 = [
    { label: 'Our Team', link: '/team' },
    { label: 'Our Mission', link: '/mission' },
    // Add more items as needed
  ];

  const dropdownItems2 = [
    { label: 'Subitem 1', link: '/subitem1' },
    { label: 'Subitem 2', link: '/subitem2' },
    // Add more items as needed
  ];

  return (
    <>
      <div className={color ? 'header header-bg' : 'header'}>
        <Link to="/">
          <p className='jo'>
            <span>{headerText}</span>
          </p>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <Link to='/Whoweare'>Who we are</Link>
            <Dropdown isOpen={dropdown1} handleDropdown={handleMouseLeave1} items={dropdownItems1} />
          </li>
          <li onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <Link to='/Ourservices'>Our services</Link>
            <Dropdown2 isOpen={dropdown2} handleDropdown={handleMouseLeave2} items={dropdownItems2} />
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li>
            <Link to='/Getintouch'>Get in touch</Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: 'white' }} />
          ) : (
            <FaBars size={25} style={{ color: 'white' }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
