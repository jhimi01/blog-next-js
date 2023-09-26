import { useEffect, useState } from "react";
import { FaCloudMoon } from 'react-icons/fa';
import { BsFacebook, BsFillCloudSunFill, BsYoutube } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';

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
      <div className="md:flex items-center justify-between custom-width">
      <div className="flex items-center gap-6">
        <input type="text" className="rounded-full py-1 pl-3 bg-transparent border" placeholder="search..."/>
        <button onClick={toggleTheme} className={`text-3xl ${!isDarkMode && 'text-[#333]'}`}>{isDarkMode ? <BsFillCloudSunFill /> : <FaCloudMoon />}</button>
      </div>
      <div className={`text-3xl font-semibold ${!isDarkMode && 'text-[#333]'}`}>
        <a>Design</a>
      </div>
      <div>
        <div className={`flex gap-6 text-3xl ${!isDarkMode && 'text-[#333]'}`}>
          <a><BsFacebook /></a>
          <a><AiOutlineTwitter /></a>
          <a><BsYoutube /></a>
        </div>
      </div>
     </div>
     </div>
    )
  }