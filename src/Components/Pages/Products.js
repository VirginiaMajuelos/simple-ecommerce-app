import React, { useState, useEffect, useContext } from "react";
import "../../Landing.css";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { AddProductToCart } from "../../App";

const Products = (props) => {
  const { addProduct, shoppingCart } = useContext(AddProductToCart);

  const [data, setData] = useState();

  console.log(shoppingCart);
  const fetchData = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let response = await res.json();
    setData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-section">
      <div>
        {data?.map((elm) => (
          <div className="container-product" key={elm.id}>
            <p>{elm.title}</p>
            <p>{elm.category}</p>
            <p>{elm.price}</p>
            <Link to={`/products/${elm.id}`} data={data.id}>
              Link Details
            </Link>
            <button className="button-comprar" onClick={() => addProduct(elm)}>
              <MdAddShoppingCart /> Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
