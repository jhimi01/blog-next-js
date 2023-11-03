import { useState, useEffect, useContext } from "react";
import { darkModeContext } from "@/Provider/DarModeProvider";
const useMood = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { setIsDark } = useContext(darkModeContext);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setIsDark(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  // console.log(isDarkMode)
  return { isDarkMode, toggleTheme, setIsDarkMode };
};

export default useMood;
