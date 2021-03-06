import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import logo from "./logo-smaller.png";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu.jsx';
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
  const [flip, isFlipped] = useState(false);
  const toggleBurger = () => {
    isFlipped(!flip);
  }
  return (
    <nav>
      <div className="nav">
        <div className="burger-wrapper">
          <button className="burger-button" onClick={toggleBurger}>
          {flip ? (
              <MdClose style={{ color: "#fff", width: "40px", height: "40px" }}
              />) :
              (<FiMenu style={{ color: "#7B7B7B", width: "40px", height: "40px" }} />)}
            {flip ? <BurgerMenu user={user}/> : null}
          </button>
      </div>
        <NavLink className="logo" to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <div className="link-wrapper">
          <div className="links">
            {user && <div className="link">Welcome, {user.username}</div>}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
        
      </div>
    </nav>
  );
};
export default Nav;