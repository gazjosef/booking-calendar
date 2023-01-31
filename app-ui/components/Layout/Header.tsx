import SearchBox from "@/components/UI/SearchBox";

export default function Header() {
  return (
    <header className="header | u-bg-blue u-text-white">
      <div className="container | u-flex u-items-center u-justify-between">
        <div className="header__logo | u-fs-500 u-fw-bold ">
          <span>Lamabooking</span>
        </div>
        <div className="header__items">
          <button className="btn">Register</button>
          <button className="btn">Login</button>
        </div>
      </div>

      <div className="container">
        <SearchBox />
      </div>
    </header>
  );
}
