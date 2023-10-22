'use client'
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import useMood from "@/hooks/useMood";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file

export default function Home() {
  const { isDarkMode } = useMood();
  useEffect(() => {
    AOS.init();

    console.log(isDarkMode)
  }, [isDarkMode]);
  console.log(isDarkMode)
  const style = {
    // color: "#333",
    WebkitTextFillColor: "transparent",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "#666",
  };

  return (
    <div className="custom-width">
      {/* <Helmet text='blog'></Helmet> */}
      <Head>
        <title>Blog</title>
      </Head>
      <div className="border-b py-10 md:px-0 px-3 md:space-y-5">
        <p
          className="uppercase font-thin w-2/3 ml-auto "
          style={{ letterSpacing: "2px" }}
        >
          a <span className="border-b border-[#747373]">personal</span> blog
        </p>
        <h1
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          className={`text-7xl md:text-[160px] font-semibold text-center`}
        >
          Ven<span style={style}>ture</span>r
        </h1>
        <p
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          className=" text-4xl font-extralight md:w-2/3 ml-auto text-justify md:text-start md:pl-32"
          style={{ letterSpacing: "3px" }}
        >
          I am a Blogger & Photographer Based in the world.
        </p>
      </div>
      {/* {shouldShowGradient && <span className="bg-gradient-cusotom"></span>} */}
     
      <span className="bg-gradient-cusotom add-gradient"></span>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
}
