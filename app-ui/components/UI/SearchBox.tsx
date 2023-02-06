import { useState } from "react";
import { FaBed, FaCalendarAlt, FaUser } from "react-icons/fa";
// import { setConstantValue } from "typescript";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface DateRangeSelection {
  startDate: Date;
  endDate: Date | null;
  key: string;
}

export default function SearchBox() {
  const [date, setDate] = useState<DateRangeSelection[]>([
    {
      startDate: new Date(),
      endDate: null,
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
        <span className="searchBox__text">Date to Date</span>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
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
