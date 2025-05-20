import React from "react";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantProducts from "./RestaurantProducts";

const Detail = () => {
  return (
    <div>
      {/* Detail */}
      <div className="shadow">
        <div className="container">
          <RestaurantDetails />
        </div>
      </div>
      {/* Products */}
      <div className="shadow">
        <div className="container">
          <RestaurantProducts />
        </div>
      </div>
    </div>
  );
};

export default Detail;
