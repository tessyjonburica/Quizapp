import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import '../index.css'

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 right-4"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  );
};

export default ToggleSwitch;
