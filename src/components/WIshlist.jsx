// Import required modules
import React, { useState } from "react";
import { useWishlist } from './WishlistProvider'

// Sample data for the wishlist
// const initialWishlist = [
//   { id: 1, name: "Wireless Headphones", price: "$120" },
//   { id: 2, name: "Smartwatch", price: "$150" },
//   { id: 3, name: "Gaming Chair", price: "$300" },
// ];

// Wishlist Component
export const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-3xl mx-auto m-6 bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-center">My Wishlist</h1>
      </div>
      <div className="p-6">
        {wishlistItems.length > 0 ? (
          <div className="space-y-4">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">Your wishlist is empty!</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
