import React from "react";
import Image_1 from "../../assets/landingPage/maincontent_img_1.png"; 
import Image_2 from "../../assets/landingPage/maincontent_img_2.png"; 

function MainContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-24">
        
        <div className="text-left mb-10">
          <p className="text-sm text-[#7B2CBF] tracking-wide uppercase">
            Start your story, here
          </p>
          
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
            A Beginner Freelancer, Start <br />
            Your Story here with us,
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12">
          
          <div className="flex justify-center">
            <div className="w-full md:w-96 h-auto rounded-xl mt-16 bg-gray-300">
              <img src={Image_1} alt="Freelancer" className="w-full h-full rounded-xl object-cover" />
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:space-y-6">
            <div className="w-full md:w-60 h-auto rounded-xl bg-gray-300">
              <img src={Image_2} alt="Learning" className="w-full h-full rounded-xl object-cover" />
            </div>
            <p className="text-2xl md:text-lg text-[#9381FF] pt-4 md:pt-20">
              We make sure everyone gets equal learning and opportunities to unveil their skills and project here at our platform.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around mt-16 md:mt-32">
          <div className="text-center mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D]">$1.5 Billion</h3>
            <p className="text-[#9381FF]">Current Market</p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D]">10-15 Million</h3>
            <p className="text-[#9381FF]">Join annually</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-[#2D2D2D]">115-20%</h3>
            <p className="text-[#9381FF]">Demand (annually)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
