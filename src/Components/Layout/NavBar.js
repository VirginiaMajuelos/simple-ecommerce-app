import React from "react";
import "../../Landing.css";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

const Navbar = ({ count }) => {
  return (
    <nav className="container-navbar">
      <Link className="items" to="/">
        Home
      </Link>
      <Link className="items" to="/products">
        Products
      </Link>
      <Link className="items" to="/cart">
        <MdAddShoppingCart /> {count}
      </Link>
    </nav>
  );
};

export default Navbar;
