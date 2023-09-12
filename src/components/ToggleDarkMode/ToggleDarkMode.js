import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ToggleDarkMode.css'

const DarkModeToggle = () => {
  const { toggleDarkMode } = useContext(ThemeContext);

  return (
    <label class="switch" >
        <input type="checkbox" onClick={toggleDarkMode}/>
        <span class="slider"></span>
    </label>
  );
};

export default DarkModeToggle;