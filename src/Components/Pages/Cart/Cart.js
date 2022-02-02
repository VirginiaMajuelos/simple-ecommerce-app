import React, { useContext, useState, useEffect } from "react";
import { AddProductToCart } from "../../../App";
// import { FcFullTrash } from "react-icons/fc";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { shoppingCart, setCountCart, addProduct } =
    useContext(AddProductToCart);
  const [total, setTotal] = useState(undefined);


  const cartDup = [...shoppingCart]
  const unicos = [];
  
  for(var i = 0; i < cartDup.length; i++) {
   
    const elemento = cartDup[i];
   
    if (!unicos.includes(cartDup[i])) {
      unicos.push(elemento);
    }
  }

  const totalPrice = () => {
    let sum = shoppingCart?.reduce((sum, elm) => ({
      price: sum.price + elm.price,
    }));
    setTotal(sum);
  };


var repetidos = {};

shoppingCart.forEach(function(title){
  repetidos[title.title] = (repetidos[title.title] || 0) +1 ;
});
const countProductItem = Object.values(repetidos)


  const deleteItem = (item) => {
    let index = shoppingCart.indexOf(item);
    shoppingCart.splice(index, 1);
    setCountCart(shoppingCart.length);
  };

//   const deleteTotal = () => {  
//     let elementosRemovidos = shoppingCart.splice(0, shoppingCart);
//     setCountCart(elementosRemovidos);
//   console.log('he borrado todo?', elementosRemovidos)
// }

  useEffect(() => {
    shoppingCart?.length !== 0 && totalPrice();
  }, [shoppingCart.length]);

  return (
    <div className="container-section">
      <h2>Cart</h2>

      {unicos.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <h3>Total products:{total?.price?.toFixed(2)} €</h3>
                {/* <button
                  className="button-comprar"
                  onClick={() => deleteTotal()}
                >
                  <FcFullTrash />
                </button> */}
          {unicos?.map((elm) => (
            <div className="container-product" key={elm.id}>
              <p>Nombre:{elm.title}</p>
              <p>Category:{elm.category}</p>
              <p>Price: {elm.price.toFixed(2)}€</p>
    {/* <p>{countProductItem.splice(0,1)}</p> */}
              <div className="container-button-cart">
                <button
                  className="button-comprar"
                  onClick={() => addProduct(elm)}
                >
                  <GrAdd />
                </button>
                <p>{countProductItem.splice(0,1)}</p>
                <button
                  className="button-comprar"
                  onClick={() => deleteItem(elm)}
                >
                  <GrFormSubtract />
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
