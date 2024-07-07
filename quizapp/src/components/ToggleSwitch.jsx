import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';


const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none"
    >
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  );
};

export default ToggleSwitch;
