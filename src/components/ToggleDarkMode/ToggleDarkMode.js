import React, { useContext,useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ToggleDarkMode.css'

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(()=>{
    
  },[toggleDarkMode])
  console.log(isDarkMode);
  return (
    <label class="switch" >
        <input type="checkbox" onClick={toggleDarkMode}/>
        <span class="slider"></span>
    </label>
  );
};

export default DarkModeToggle;