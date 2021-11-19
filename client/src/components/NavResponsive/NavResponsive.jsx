import { useState } from "react";
import Nav from "../Nav/Nav";
import "./NavResponsive.css";


const NavResponsive = (props) => {

    const [phone, setPhone] = useState(false);


    const displayClass = () =>{ 
           if (phone !== true){  
                <Nav user={props.user} />  
                  }
                  else{   
                      HamburgerMenu ()
                     }  
    };
    
    const HamburgerMenu = () => {
        <h1>Hamburger Menu</h1>
        setPhone(true)
    }

    return(

        <div className={`nav-resp ${phone === true ? HamburgerMenu(true) : <Nav user={props.user} />}`}>
            <Nav user={props.user} />     
        </div>
    )
}
export default NavResponsive;
