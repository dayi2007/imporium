import { Link } from "react-router-dom";
import './BurgerMenu.css'

const BurgerMenu = ({user}) => {
  return (
    <div className="burger-toggle">
      {user && (<div className="link" className="burger-link">Welcome, {user.username}</div>)}
      <Link to="/gallery" className="burger-link">Gallery</Link>
      <Link to="/about" className="burger-link">About Us</Link>

      {user ? <Link to="/create-product" className="burger-link">Add NFT</Link> : null}
      {user ? <Link to="/sign-out" className="burger-link">Sign Out</Link> : null}

      {user ? null : <Link to="/sign-up" className="burger-link">Sign Up</Link>}
      {user ? null : <Link to="/sign-in" className="burger-link">Sign in</Link>}

    </div>
  )
}

export default BurgerMenu;