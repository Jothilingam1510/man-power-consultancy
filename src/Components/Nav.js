import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleClick = () => setClick(!click);

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

    return () => {
      window.removeEventListener('scroll', changeColor);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Adding empty dependency array to run the effect only once on mount

  // Condition to change the text based on screen width
  const headerText = screenWidth <= 600 ? 'AM CONSULTANCY' : 'ALAGAR MALAIYAN CONSULTANCY';

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
          <li>
            <Link to='/Whoweare'>Who we are</Link>
          </li>
          <li>
            <Link to='/Ourservices'>Our services</Link>
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
