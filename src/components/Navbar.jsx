import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/projects";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">Jamshidbek Samandarov</div>

      <ul>
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
