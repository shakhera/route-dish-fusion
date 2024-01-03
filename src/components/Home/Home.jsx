import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="bg-slate-300">
      <div className="container-main">
        <div className="img-container">
          <img id="img-container-list1" src="Mutton.jpg" alt="" srcset="" />
        </div>
        <div className="text-heding">
          <h1 className=" heading-text">
            {" "}
            Welcome to <span id="title">Route Dish Fusion </span>
          </h1>
          <p className="pb-10">
            Food is a vital aspect of human existence, providing sustenance,
            pleasure, and cultural expression. A balanced, nutritious diet with
            nutrient-rich foods is crucial for maintaining optimal health and
            well-being. However, modern dietary patterns often face challenges
            due to processed foods high in added sugars, unhealthy fats, and
            sodium. Promoting nutritional education and sustainable food systems
            is essential for fostering healthier eating habits and mitigating
            diet-related ailments. Food serves as a nexus between science,
            culture, and society, requiring ongoing research, policy
            development, and personal exploration.
          </p>
        </div>
        <div className=" img-container">
          <img
            className="img-container-list2"
            src="vegetable.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div className="mt-8 ml-12">
        <h2 className="text-2xl font-bold mb-4">Culinary Exploration</h2>
        <div className="mb-6">
          <div className=" w-full pl-6">
            <h3 className="text-xl font-bold mb-2">Route</h3>
            <ul>
              <li>
                Symbolizing a journey, this project promises to take visitors on
                a delightful exploration of various cuisines, just like
                traveling through different routes.
              </li>
            </ul>
          </div>
          <div className="w-full pl-6 pb-6">
            <h3 className="text-xl font-bold mb-2">Dish Fusion</h3>
            <ul>
              <li>
                Emphasizing the fusion of flavors, techniques, and cultural
                influences in creating unique and innovative dishes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
