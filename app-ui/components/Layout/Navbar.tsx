import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <span>LamaBooking</span>
        </div>
        <div className="navbar__items">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}
