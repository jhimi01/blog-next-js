import { FaCloudMoon } from "react-icons/fa";
import { BsFacebook, BsFillCloudSunFill, BsYoutube } from "react-icons/bs";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
// import Link from "next/link";
import useMood from "@/hooks/useMood";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const { isDarkMode, toggleTheme } = useMood();
   // Function to handle the click event and redirect to /blogs
 const handleInputClick = () => {
  router.push('/blogs');
};


  return (
    <div
      className={`py-2 px-4 ${isDarkMode && "border"}`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
    >
      <div className="flex items-center justify-between custom-width gap-1 sm:gap-0">
        <div className="flex items-center gap-1 sm:gap-6">
          <input
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            type="text"
            className="input-style"
            placeholder="search..."
            onClick={handleInputClick}
          />
          <button
            onClick={toggleTheme}
            className={`text-3xl ${!isDarkMode && "text-[#333]"}`}
          >
            {isDarkMode ? <BsFillCloudSunFill /> : <FaCloudMoon />}
          </button>
        </div>
        <div>
          <div>
            <nav>
              <ul
                className={`flex flex-wrap md:gap-6 sm:gap-3 gap-1 text-xl ${
                  !isDarkMode && "text-[#333]"
                }`}
              >
                <li>
                  <Link
                    className={`link ${pathname === "/" ? "active" : ""}`}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link ${pathname === "/about" ? "active" : ""}`}
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className={`link ${pathname === "/blogs" ? "active" : ""}`}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`link ${
                      pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className={`link ${pathname === "/faq" ? "active" : ""}`}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <a><BsFacebook /></a>
<a><AiOutlineTwitter /></a>
<a><BsYoutube /></a>
<a><AiFillInstagram /></a>
<a><IoLogoWhatsapp /></a> */
}
