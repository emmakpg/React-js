import React from "react";

function Product(props) {
  return (
    <div>
      <h3>Product: {props.name}</h3>
      <p>Price: GHC{props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  );
}

export default Product;
