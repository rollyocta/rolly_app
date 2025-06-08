import React, { useContext } from 'react';
import { ThemeContext } from "../../ThemeContext.jsx";

// styles
import './Navbar.css';

// icon
import { Sun, Moon } from 'lucide-react';

// component
import HamburgerButton from './HambugerButton.jsx';
import ThemeToggleButton from './ThemeToggleButton.jsx';

const Header = ({ isOpen, toggleMenu }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      
      <h5 className='logo-name'>Rolly Dev</h5>

      <ul className='nav-menu'>
        <li className='nav-list'>Home</li>
        <li className='nav-list'>About</li>
        <li className='nav-list'>Work</li>
        <li className='nav-list'>Skills</li>
        <li className='nav-list'>Contact</li>
      </ul>

      <div className='toggle-container'>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Header;
