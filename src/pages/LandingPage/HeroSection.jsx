import React from "react";
import Hero_section_img from "../../assets/landingPage/hero_section_img.png";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 md:px-48 ">
      <div className="w-full md:w-1/2 max-w-md text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Making Freelancing Simple</h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Kickstart your freelancing career on our platform. Connect with clients and start working in minutes.
        </p>
        <div className="text-center md:text-left">
          <a href="#"><button className="bg-[#C77DFF] hover:bg-[#7B2CBF] text-white font-bold py-2 px-6 rounded-lg">
            Get Started
          </button>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <img src={Hero_section_img} alt="Hero Section Image" className="w-full h-auto mx-auto" />
      </div>
    </section>
  );
}

export default HeroSection;
