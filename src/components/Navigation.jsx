import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-dark justify-content-start bg-primary">
      <div className="navbar-brand ml-4">logo</div>
      <ul className="collapse d-flex align-items-center mt-0 mb-0">
        <li className="nav-item active">
          <NavLink to="/" exact className="nav-link">App</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>       
      </ul>  
    </nav>
  )
}

export default Navigation;