
import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


export default function Nav(){

  const [clicked,setclicked]=React.useState(false)
  const handleclick=()=>{
    setclicked(!clicked)
  }
  const closeMobile=()=>{
    setclicked(false)
  }

  return(
    <>
    <nav className="Navbar">
      <div className="Navcontainer">
        <p className="Chemistname">Transford Chemist</p>
        <div className="Menu" onClick={handleclick}>
          {clicked? <CloseIcon className="close"/> :<MenuIcon className="menuic"/>}

        </div>
        <ul className={clicked ? "Nave-active":"nav-menu"}>
          <li className="Nav-item">
            <Link to='/' className="Nav-links" onClick={closeMobile}>Home</Link>

          </li>
          <li className="Nav-item">
            <Link to="/Products" className="Nav-links" onClick={closeMobile}>Our Products</Link>

          </li>
          <li className="Nav-item">
            <Link to="/Contact" className="Nav-links" onClick={closeMobile}>Contact Us</Link>

          </li>

        </ul>

      </div>

    </nav>

    </>
  )
}