import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        className="max-h-10"
        src="/favicon_io/android-chrome-512x512.png"
        alt="Calendar Logo"
      />
      <h2 className="ml-2">Booking Calendar</h2>
    </Link>
  );
}
