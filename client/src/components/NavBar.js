import React, { useState } from 'react';
import {useDarkMode} from './useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Players</h1>
      <button  onClick={toggleMode} className="dmBtn">Theme</button>
    </nav>
  );
};

export default Navbar;