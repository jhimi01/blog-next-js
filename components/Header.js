import { useEffect, useState } from "react";
import { FaCloudMoon } from 'react-icons/fa';
import { BsFacebook, BsFillCloudSunFill, BsYoutube } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import Link from "next/link";
import useMood from "@/hooks/useMood";

export default function Header() {

  const { isDarkMode, toggleTheme } = useMood()

    return (
     <div className="p-4 header-bg">
      <div className="md:flex items-center justify-between custom-width">
      <div className="flex items-center gap-6">
        <input style={{"boxShadow": "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}} type="text" className="input-style" placeholder="search..."/>
        <button onClick={toggleTheme} className={`text-3xl ${!isDarkMode && 'text-[#333]'}`}>{isDarkMode ? <BsFillCloudSunFill /> : <FaCloudMoon />}</button>
      </div>
      <div className={`text-3xl font-semibold uppercase ${!isDarkMode && 'text-[#333]'}`}>
      <Link href={'/'}>
        Design
      </Link>
      </div>
      <div>
        <div className={`flex gap-6 text-2xl ${!isDarkMode && 'text-[#333]'}`}>
          <a><BsFacebook /></a>
          <a><AiOutlineTwitter /></a>
          <a><BsYoutube /></a>
        </div>
      </div>
     </div>
     </div>
    )
  }