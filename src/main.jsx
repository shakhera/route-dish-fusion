import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Restaurants from "./components/Restaurants/Restaurants.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/restaurants",
        element: <Restaurants></Restaurants>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
      },
      {
        path: "restaurant/:mealId",
        element: <RestaurantDetails></RestaurantDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s/${params.mealId}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
