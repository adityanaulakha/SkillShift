import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewImage from "../assets/review_image.png";

function Reviews() {
  return (
    <section className="flex justify-center items-center p-20 bg-[#2D2D2D]">
      <div className="flex flex-col md:flex-row items-center text-white space-y-6 mx-48 md:space-y-0 md:space-x-10">
        <img src={ReviewImage} alt="Review Image" className="w-32 h-32 rounded-full" />
        <div>
          <p className="text-base">
            “OMG! I cannot believe that I have got a brand new landing page after
            getting Albino. It was super easy to edit and publish.”
          </p>
          <h3 className="mt-4 text-lg font-bold">- Karan Aujla</h3>
          <div className="flex mt-2 ml-2">
            {Array(4).fill().map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 w-4 h-4" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
