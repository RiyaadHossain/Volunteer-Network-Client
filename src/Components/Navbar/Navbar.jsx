import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Logos/Group 1329.png";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center h-20">
      <div className="logo">
        <img className="w-32" src={Logo} alt="" />
      </div>
      <div className="nav-link">
        <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to="/donation">Donation</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to="/events">Events</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active-link' : 'link'} to="/blog">Blog</NavLink>
        <button className="nav-btn">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
