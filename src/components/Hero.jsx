import React from "react";
import HeroCarousel from "./HeroImg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Shop the Latest Trends
          </h1>
          <p className="mt-4 text-gray-600">
            Discover the best deals on the newest arrivals. Upgrade your
            wardrobe today!
          </p>
          <div className="mt-6">
            <Link
              to="/Products"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Shop Now!
            </Link>
            <a
              href="#"
              className="ml-4 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
            >
              Learn More!
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[60vh] md:w-1/2 flex justify-center">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
