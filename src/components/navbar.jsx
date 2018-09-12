import React, { Component } from "react";

// stateless functional compoennt
const NavBar = ({ totalCounters }) => {
  console.log("Navbar - rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar
        <span className="badge badge-pill secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
