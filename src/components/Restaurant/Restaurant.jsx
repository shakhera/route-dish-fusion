import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurant }) => {
  console.log(restaurant);
  const { strMealThumb, strMeal, strArea, strCategory, idMeal } = restaurant;
  return (
    <div className="border rounded overflow-hidden">
      <img className="w-full h-40 object-cover" src={strMealThumb} alt="" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Meal: {strMeal}</h2>
        <p className="text-sm mb-2">Ares: {strArea}</p>
        <p className="text-sm">Category :{strCategory}</p>
      </div>
      <Link to={`/restaurant/${idMeal}`}>Details</Link>
      <button>Show Details</button>
    </div>
  );
};

export default Restaurant;
