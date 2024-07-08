import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-500 h-24 flex items-center justify-between px-4">
      <h1 className="text-white text-3xl">FlipKart</h1>
      <div className="space-x-4">
        <Link to="/login" className="text-white">Login</Link>
        <Link to="/register" className="text-white">Register</Link>
        <Link to="/seller" className="text-white">Become Seller</Link>
        <Link to="/more" className="text-white">More</Link>
        <Link to="/contact" className="text-white">Contact Us</Link>
      </div>
    </div>
  );
}
