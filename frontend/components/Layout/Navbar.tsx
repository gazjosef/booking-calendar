import { Link } from "react-router-dom";
import { FaUser, FaSignInAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center space-x-2">
        <li className="flex items-center">
          <Link to="/register" className="flex items-center space-x-1">
            <FaUser />
            <span>Register</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="/login" className="flex items-center space-x-1">
            <FaSignInAlt />
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
