export default function Header() {
  return (
    <header className="header | u-text-white">
      <div className="container">
        <div className="header__logo | u-fs-500 u-fw-bold ">
          <span>lamabooking</span>
        </div>
        <div className="header__items">
          <button className="btn">Register</button>
          <button className="btn">Login</button>
        </div>
      </div>
    </header>
  );
}
