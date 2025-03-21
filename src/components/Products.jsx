import React, { useState, useEffect } from "react";
import { useWishlist } from "./WishlistProvider";
import { useCart } from "./CardCOntext"; // Import useCart
import axios from "axios"; // Axios for making API calls

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const { cartItems, addToCart, removeFromCart } = useCart(); // Get cart context

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading Products...</div>;
  }

  return (
    <div className="bg-background min-h-screen p-4">
      <h1 className="text-3xl font-bold text-primary text-center my-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-card rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow"
          >
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() =>
                wishlistItems.some((item) => item.id === product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={
                  wishlistItems.some((item) => item.id === product.id)
                    ? "#ef4444"
                    : "none"
                }
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-accent hover:scale-110 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.8 7.33c0-2.36-1.92-4.27-4.28-4.27-1.43 0-2.78.66-3.67 1.68-.88-1.02-2.24-1.68-3.67-1.68-2.36 0-4.28 1.92-4.28 4.28 0 2.53 2.28 4.54 5.65 7.86.52.53 1.24.94 1.98 1.11.75-.17 1.46-.58 1.98-1.11 3.37-3.32 5.65-5.33 5.65-7.86z"
                />
              </svg>
            </button>
  
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover object-center rounded-xl border border-gray-200"
            />
  
            <h2 className="text-lg font-semibold mt-4 text-textPrimary line-clamp-2">
              {product.title}
            </h2>
            <p className="text-textSecondary mt-2">${product.price}</p>
  
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-accent text-white py-2 rounded-xl hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
