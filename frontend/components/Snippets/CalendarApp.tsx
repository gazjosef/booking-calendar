import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarApp: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="container | min-h-screen mx-auto">
      <div className="py-16 grid grid-cols-2">
        <Calendar
          onChange={onChange as CalendarProps["onChange"]}
          value={value as CalendarProps["value"]}
          className="min-w-full p-4 border border-solid border-opacity-20 border-black"
        />
        <div>
          <h1>Booking Info</h1>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
