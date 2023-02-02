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

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="searchBox__text"
        >{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>

        {openOptions && (
          <div className="option">
            <div className="option__item">
              <span className="option__text">Adult</span>
              <div className="option__counter">
                <button
                  disabled={options.adult <= 1}
                  className="option__btn"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="option__number">{options.adult}</span>
                <button
                  className="option__btn"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="option__item">
              <span className="option__text">Children</span>
              <div className="option__counter">
                <button
                  disabled={options.children <= 0}
                  className="option__btn"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="option__number">{options.children}</span>
                <button
                  className="option__btn"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="option__item">
              <span className="option__text">Room</span>
              <div className="option__counter">
                <button
                  disabled={options.room <= 1}
                  className="option__btn"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="option__number">{options.room}</span>
                <button
                  className="option__btn"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="searchBox__item">
        <button className="searchBox__btn | u-bg-blue-200 u-text-white">
          Search
        </button>
      </div>
    </div>
  );
}
