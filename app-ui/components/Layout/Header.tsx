// import React from "react";
// import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header | u-text-white">
      <div className="container">
        <div className="header__logo | u-fs-500 u-fw-bold ">
          <span>LamaBooking</span>
        </div>
        <div className="header__items">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
}
