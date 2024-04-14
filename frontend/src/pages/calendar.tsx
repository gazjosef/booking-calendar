import Calendar from "../../components/Snippets/CalendarApp";

const calendar: React.FC = () => {
  return (
    <div className="grid grid-cols-2">
      <Calendar />
      <div>Booking Info</div>
    </div>
  );
};
export default calendar;
