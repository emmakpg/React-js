import React, { useState, useEffect } from "react";

function Services() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
    );
    const items = await data.json();
    //console.log(items.meals);
    setItems(items.meals);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Services Page</h3>
      {items.map((item) => {
        return <p key={item.idMeal}>{item.strMeal}</p>;
      })}
    </div>
  );
}

export default Services;
