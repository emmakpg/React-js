import React, { useState, useEffect } from "react";

function MealItem({ match }) {
  useEffect(() => {
    fetchMeal();
  }, []);

  const [state, setstate] = useState([]);

  const fetchMeal = async () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setstate(data.meals[0]);
      });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>{state.strMeal}</h3>
      <p>{state.strInstructions}</p>
      <img
        style={{ width: 350, height: 350 }}
        src={state.strMealThumb}
        alt=""
      />
    </div>
  );
}

export default MealItem;
