import { useState, useEffect } from 'react';

const useMood = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme'); // Apply dark theme class
    } else {
      document.body.classList.remove('dark-theme'); // Remove dark theme class
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleTheme };
};

export default useMood;
