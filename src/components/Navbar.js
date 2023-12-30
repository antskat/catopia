import { LogoSvg } from "../components/Svg.js";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../utils/authContext.js";
import { PersonSvg, NotificationsSvg } from "../components/Svg.js";
const Navbar = () => {
  const { isLogin } = useAuth();
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/home" className="logo link">
          cat
          <span className="logo-span">
            <LogoSvg />
          </span>
          pia
        </NavLink>
        <nav className="nav">
          <ul className="nav-list list">
            <li className="nav-list-item">
              <NavLink to="/home" className="nav-link link">
                Home
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/about-cats"
                className="nav-link link"
                href="#"
              >
                About cats
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink className="nav-link link" href="#">
                Gallery
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink className="nav-link link" href="#">
                About us
              </NavLink>
            </li>
          </ul>
        </nav>
          {isLogin ? (
            <div className="header-btn-login-container">
              <Link to="/notifications">
                <NotificationsSvg />
              </Link>
              <Link to="/profile">
                <PersonSvg />
              </Link>
            </div>
          ) : (
            <div className="header-btn-container">
              <NavLink to="/login" className="login-btn link">
                Login
              </NavLink>
              <NavLink to="/register" className="signup-btn link">
                Sign Up
              </NavLink>
            </div>
          )}
      </div>
      <hr />
    </header>
  );
};

export default Navbar;
