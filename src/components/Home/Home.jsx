import React from "react";

const Home = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-7 ">
        Welcome to Route Dish Fusion
      </h2>
      <div className="m-10">
        <h4 className="text-2xl font-bold">Culinary Exploration</h4>
        <div>
          <h2 class="text-3xl font-bold mb-4">Culinary Exploration</h2>
          <div class="flex justify-center items-center mb-6">
            <div class="w-1/2 pr-6">
              <h3 class="text-xl font-bold mb-2">Route</h3>
              <ul class="text-gray-700">
                <li>
                  Symbolizing a journey, this project promises to take visitors
                  on a delightful exploration of various cuisines, just like
                  traveling through different routes.
                </li>
              </ul>
            </div>
            <div class="w-1/2 pl-6">
              <h3 class="text-xl font-bold mb-2">Dish Fusion</h3>
              <ul class="text-gray-700">
                <li>
                  Emphasizing the fusion of flavors, techniques, and cultural
                  influences in creating unique and innovative dishes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
