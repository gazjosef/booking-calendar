import { useState } from "react";
import { FaBed, FaCalendarAlt, FaUser } from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

export default function SearchBox() {
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
        <span
          onClick={() => setOpenDate(!openDate)}
          className="searchBox__text"
        >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="searchBox__date"
          />
        )}
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
