import React from "react";
import HeroCarousel from "./HeroImg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-920 to-blue-700 h-[90%]">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 leading-tight">
            Shop the Latest Trends
          </h1>
          <p className="mt-4 text-gray-200">
            Discover the best deals on the newest arrivals. Upgrade your
            wardrobe today!
          </p>
          <div className="mt-6">
            <Link
              to="/Products"
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Shop Now!
            </Link>
            <a
              href="#"
              className="ml-4 px-6 py-3 bg-blue-200 text-blue-900 font-semibold rounded-lg shadow-md hover:bg-blue-300 transition"
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
