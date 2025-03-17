import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Wishlist from "./components/WIshlist";
import { WishlistProvider } from "./components/WishlistProvider";
import { CartProvider } from "./components/CardCOntext";
import CartSummary from "./components/Cart";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/products" element={<Products />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<CartSummary/>}/>
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
