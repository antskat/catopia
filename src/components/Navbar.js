import logo from "../img/catopia.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/catopia/" className="logo link">
          cat
          <span>
            <img src={logo} alt="logo" />
          </span>
          pia
        </NavLink>
        <nav className="nav">
          <ul className="nav-list list">
            <li className="nav-list-item">
              <NavLink to="/catopia/" className="nav-link link">
                Home
              </NavLink>
            </li>
            <li className="nav-list-item">
              <a className="nav-link link" href="#">
                About cats
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-link link" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-list-item">
              <a className="nav-link link" href="#">
                About us
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-btn-container">
          <NavLink to="/catopia/login" className="login-btn link">Login</NavLink>
          <NavLink to="/catopia/register" className="signup-btn link">Sign Up</NavLink>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Navbar;
