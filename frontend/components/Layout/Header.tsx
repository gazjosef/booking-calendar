import React from "react";
import { Link } from "react-router-dom";
// ** Import Icons
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="p-6 text-slate-700 shadow-[0_0_5px_0_rgba(0,0,0,0.5)]	">
      <div className="container mx-auto flex items-center justify-between font-semibold tracking-wide">
        <div className="head__logo">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="max-h-10"
              src="/logo/calendar.png"
              alt="Calendar Logo"
            />
            <h2 className="ml-2">Booking Calendar</h2>
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
