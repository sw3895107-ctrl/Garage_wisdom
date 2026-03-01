import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", borderBottom: "1px solid black" }}>
    <Link to="/">Home</Link> | <Link to="/fixes">Fixes</Link> | <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;
