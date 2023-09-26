import { useEffect, useState } from "react";
import { FaCloudMoon } from 'react-icons/fa';
import { BsFillCloudSunFill } from 'react-icons/bs';

export default function Header() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    console.log("Button Clicked");
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme'); // Apply dark theme class
    } else {
      document.body.classList.remove('dark-theme'); // Remove dark theme class
    }
  }, [isDarkMode]);
  
    return (
     <div className="p-4 header-bg">
      <div className="flex items-center justify-between w-11/12 mx-auto">
      <div className="flex items-center gap-6">
        <input type="text" className="rounded-full py-1 px-3 bg-transparent border" placeholder="search..."/>
        <button onClick={toggleTheme} className="text-3xl">{isDarkMode ? <BsFillCloudSunFill /> : <FaCloudMoon />}</button>
      </div>
      <div className="text-3xl font-semibold">
        <a>Design</a>
      </div>
      <div>
        <div className="flex gap-4 text-xl">
          <a>Facebook</a>
          <a>Twitter</a>
          <a>Youtube</a>
        </div>
      </div>
     </div>
     </div>
    )
  }