import React from "react";
import Graphic_Design_img from "../assets/graphic_design_img.png";
import Web_Dev_img from "../assets/web_dev_img.png";
import App_Dev_img from "../assets/app_dev_img.png";

function Services() {
  const services = [
    {
      image: Graphic_Design_img,
      title: "Graphic Design",
      description: "Choose your next graphic design project with confidence. Showcase your creativity and deliver custom designs that captivate clients.",
      bgColor: "bg-[#7B2CBF]",
    },
    {
      image: Web_Dev_img,
      title: "Web Development",
      description: "Select your next web development project with confidence. Showcase your skills and deliver custom websites that meet client needs.",
      bgColor: "bg-[#04E762]",
    },
    {
      image: App_Dev_img,
      title: "App Development",
      description: "Choose your next app development project with confidence. Showcase your skills and deliver custom apps that meet client needs.",
      bgColor: "bg-[#7B2CBF]",
    },
  ];

  return (
    <section className="py-20 bg-[#C77DFF]">
      <h2 className="text-3xl font-semibold text-center mb-12">Popular Services</h2>
      <a href="#">
        <h1 className="text-right pr-4 md:pr-56 underline font-medium md:text-right">View More</h1>
      </a>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-8 lg:mx-52 pt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 w-full text-white ${service.bgColor} rounded-lg shadow-md flex flex-col items-center`}>
              <img src={service.image} alt={service.title} className="w-32 h-32 mb-10 mt-10" />
              <h3 className="text-xl font-semibold mb-4 text-black">{service.title}</h3>
              <p className="text-center text-black">{service.description}</p>
              <a href="#">
                <button className="mt-4 px-6 py-2 text-white">View More</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
