import React from "react";
import { Link } from "react-router-dom";
import "../../../Landing.css";

const EmptyCart = () => {
  return (
    <div>
      <h3>there are not products here!</h3>
      <Link className="button-comprar" to="/products">
        Products
      </Link>
    </div>
  );
};

export default EmptyCart;
