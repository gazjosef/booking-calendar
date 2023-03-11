import React from 'react'

const Header = () => {
  return (
    <header className="p-6 shadow-[0_0_5px_0_rgba(0,0,0,0.5)]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="head__logo | flex items-center gap-2">
          <img className="max-h-12" src="/logo/calendar.png" alt="" />
          <h2 className="ml-2 text-xl font-semibold">CALENDAR</h2>
        </div>
        <div className="head__login">LOGIN</div>
      </div>
    </header>
  )
}

export default Header
