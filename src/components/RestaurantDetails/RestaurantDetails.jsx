import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const RestaurantDetails = () => {
  const restaurantDetail = useLoaderData();
  console.log(restaurantDetail);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const { strMealThumb, strMeal, strArea, strCategory, idMeal } =
    restaurantDetail;

  return (
    <div>
      <h2>details of ............</h2>
      <h2>{strMeal}</h2>

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default RestaurantDetails;
