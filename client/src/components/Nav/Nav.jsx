import "./Nav.css";
import { NavLink } from "react-router-dom";
import imporium from './imporium.png'

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
        <NavLink className='logo' to="/">
          Imporium
          {/* <img src={imporium} className="logo"/> */}
        </NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
