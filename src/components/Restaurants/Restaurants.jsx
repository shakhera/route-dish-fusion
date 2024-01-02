import React from "react";
import { useLoaderData } from "react-router-dom";
import Restaurant from "../Restaurant/Restaurant";

const Restaurants = () => {
  const restaurants = useLoaderData();
  console.log(restaurants.meals);
  return (
    <div className="m-12">
      <h2 className="text-center mb-4 font-bold text-3xl">
        Discover the Essence of Restaurants: {restaurants.meals.length}
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {restaurants.meals.map((restaurant) => (
          <Restaurant
            key={restaurant.idMeal}
            restaurant={restaurant}
          ></Restaurant>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
