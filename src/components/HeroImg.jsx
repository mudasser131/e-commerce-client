import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API calls

const HeroCarousel = () => {
  // State to store product data and the current image index for carousel
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch product data from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetching data from the Fake Store API
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Set products data to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors during API call
      }
    };

    fetchProducts(); // Call fetch function
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Setting up the image switching effect for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image in the carousel, or loop back to the first image
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval when component unmounts
  }, [products.length]); // Depend on products length to handle dynamic number of products

  return loading ? (
    <div className="flex items-center justify-center font-semibold">Loading...</div>
  ) : (
    <div className="relative w-full h-[400px] max-w-lg mx-auto">
      {/* Render images dynamically from the products array */}
      {products.map((product, index) => (
        <img
          key={index}
          src={product.image} // API image URL
          alt={`Product ${index + 1}`} // Alt text for the image
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`} // Ensure the image covers its container without stretching
        />
      ))}
    </div>
  );
};

export default HeroCarousel;
