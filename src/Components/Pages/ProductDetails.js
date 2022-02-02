import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import "../../Landing.css";
import { MdAddShoppingCart } from "react-icons/md";
import { AddProductToCart } from "../../App";

const ProductDetails = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const { addProduct, shoppingCart } = useContext(AddProductToCart);

  const fetchData = async () => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let response = await res.json();
    setDetails(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-section">
      <div className="container-product">
        <h2>Details</h2>
        <p>{details.title}</p>
        <p>{details.description}</p>
        <p>{details.price}</p>
        <img src={details.image} alt="imagen" width={200} height={200}></img>
        <br></br>
        <br></br>
        <button className="button-comprar" onClick={() => addProduct(details)}>
          <MdAddShoppingCart /> Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
