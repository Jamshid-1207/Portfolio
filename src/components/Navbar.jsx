import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="nav">
      <div className="logo">Jamshidbek Samandarov</div>

      <ul>
        <li
          className={path === "/" ? "active" : ""}
          onClick={() => navigate("/")}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={path === "/projects" ? "active" : ""}
          onClick={() => navigate("/projects")}
        >
          <Link to="/projects">Projects</Link>
        </li>
        <li
          className={path === "/about" ? "active" : ""}
          onClick={() => navigate("/about")}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={path === "/contact" ? "active" : ""}
          onClick={() => navigate("/contact")}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
