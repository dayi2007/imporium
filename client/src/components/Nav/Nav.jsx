import "./Nav.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo-smaller.png";
import Burger from '../../components/Burger/Burger.jsx';

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
  //   const [navbarOpen, setNavbarOpen] = useState(false);

  // //   const handleToggle = () => {
  // //     setNavbarOpen(!navbarOpen);
  // };
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          {/* <ul></ul> */}
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        {/* <button className='burger-button' onClick={handleToggle}>
            {navbarOpen ? <Burger>Rendering</Burger> : "Open"}
          </button> */}
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

/* function toggle_menu(id) {
  var e = document.getElementById(id);
  if (e.classList.contains("showing"))
    e.classList.remove("showing");
  else
    e.classList.add("showing");
} */
// const classNameZero = () => {
//   if (balance !== 0) {
//     className = "balance"
//   } else { className = "zero" }
// }
// <div className={`balance ${balance === 0 ? 'zero' : ''}`}>${balance}</div>