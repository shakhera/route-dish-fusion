import React from "react";

const Restaurant = ({ restaurant }) => {
  const { strMealThumb, strMeal, strArea, strCategory } = restaurant;
  return (
    <div className="border rounded overflow-hidden">
      <img className="w-full h-40 object-cover" src={strMealThumb} alt="" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Meal: {strMeal}</h2>
        <p className="text-sm mb-2">Ares: {strArea}</p>
        <p className="text-sm">Category :{strCategory}</p>
      </div>
    </div>
  );
};

export default Restaurant;
