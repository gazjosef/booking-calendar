import { FaBed, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function SearchBox() {
  return (
    <div className="searchBox | u-flex u-align-center u-justify-around | u-bg-white u-text-black">
      <div className="searchBox__item">
        <FaBed className="searchBox__icon" />
        <input
          type="text"
          placeholder="where are you going?"
          className="searchBox__input"
        />
      </div>
      <div className="searchBox__item">
        <FaCalendarAlt className="searchBox__icon" />
        <span className="searchBox__text">Date to Date</span>
      </div>
      <div className="searchBox__item">
        <FaUser className="searchBox__icon" />
        <span className="searchBox__text">2 Adults 2 Children 1 Room</span>
      </div>
      <div className="searchBox__item">
        <button className="searchBox__btn | u-bg-blue-200 u-text-white">
          Search
        </button>
      </div>
    </div>
  );
}
