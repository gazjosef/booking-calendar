import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarApp: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <Calendar
          onChange={onChange as CalendarProps["onChange"]}
          value={value as CalendarProps["value"]}
        />
        <div>
          <h1>Booking Info</h1>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
