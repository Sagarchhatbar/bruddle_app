import React,{useContext} from 'react'
import { ReactComponent as LogoImg } from '../../assets/images/Logo.svg'
import { ReactComponent as DarkLogoImg } from '../../assets/images/DarkLogo.svg'
import { ThemeContext } from '../../context/ThemeContext';

function Logo() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div>
        {isDarkMode ? <DarkLogoImg/> : <LogoImg/>}
    </div>
  )
}

export default Logo