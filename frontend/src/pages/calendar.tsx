import Calendar from "../../components/Snippets/CalendarApp";

const calendar: React.FC = () => {
  return (
    <div className="h-full grid grid-cols-2">
      <div className="grid place-content-center">
        <Calendar />
      </div>
      <div>Booking Info</div>
    </div>
  );
};
export default calendar;
