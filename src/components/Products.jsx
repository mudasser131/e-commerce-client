import React, { useState, useEffect } from "react";
import { useWishlist } from "./WishlistProvider";
import { useCart } from "./CardCOntext"; // Import useCart

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
    return (
      <div className="text-center mt-8 text-lg font-semibold text-gray-700">
        Loading Products...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-900 text-center my-8">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200"
          >
            {/* Wishlist Button */}
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
                className="w-6 h-6 text-red-500 hover:scale-110 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.8 7.33c0-2.36-1.92-4.27-4.28-4.27-1.43 0-2.78.66-3.67 1.68-.88-1.02-2.24-1.68-3.67-1.68-2.36 0-4.28 1.92-4.28 4.28 0 2.53 2.28 4.54 5.65 7.86.52.53 1.24.94 1.98 1.11.75-.17 1.46-.58 1.98-1.11 3.37-3.32 5.65-5.33 5.65-7.86z"
                />
              </svg>
            </button>

            {/* Product Image */}
            <div className="w-full h-52 bg-gray-100 flex items-center justify-center border-b border-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-40 h-40 object-contain"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-600 mt-2">${product.price}</p>

              {/* Add to Cart Button */}
              {cartItems.some((item) => item.id === product.id) ? (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
