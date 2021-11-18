import "./Nav.css";
import { NavLink } from "react-router-dom";
import logo from "./logo-smaller.png";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/create-product">
      Add NFT
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);
const alwaysOptions = (
  <>
    <NavLink className="link" to="/gallery">
      Gallery
    </NavLink>
    <NavLink className="link" to="/about">
      About
    </NavLink>
  </>
);
const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          {/* Imporium */}
          <img src={logo} className="logo" />
        </NavLink>
        <div className="link-wrapper">
          <div className="links">
            {user && (
              <div className="link">Welcome, {user.username}</div>
            )}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
