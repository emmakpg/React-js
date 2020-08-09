import React from "react";
import Product from "./Product";
import product from "./Products";

const renderProducts = product.map((prod) => (
  <Product
    key={prod.id}
    name={prod.name}
    price={prod.price}
    description={prod.description}
  />
));

function App() {
  return <div>{renderProducts}</div>;
}

export default App;
