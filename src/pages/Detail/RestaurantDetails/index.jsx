import React, { useEffect, useState } from "react";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import api from "../../../utils/api";

const RestaurantDetail = () => {
  // Url'deki id ye eriş
  const { id } = useParams();

  // State kurulumu
  const [restaurant, setRestaurant] = useState(null);
  const [isError, setIsError] = useState(null);

  // Api isteği at
  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => {
        setRestaurant(res.data);
        
      })
      .catch((err) => {
        setIsError(err.message);
      });
  }, []);

  return (
    <>
      {isError ? (
        <h1>{isError}</h1>
      ) : (
        <div className="flex gap-5 ">
          {/* Image */}
          <img
            className="w-[150px] h-[150px] rounded-md"
            src={restaurant?.photo}
            alt="restaurant-image"
          />
          {/* Info */}
          <div className="flex flex-col justify-between">
            {/* Min Price && Delivery Time */}
            <div className="flex gap-4 text-red-500">
              <p className="flex items-center gap-2">
                <FaArrowDown />
                <span className="text-gray-500">
                  min {restaurant?.minPrice} TL
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaClock />
                <span className="text-gray-500">
                  min {restaurant?.estimatedDelivery} dak
                </span>
              </p>
            </div>

            {/* Restaurant Name */}
            <h1 className="text-2xl md:text-3xl font-semibold">
              {restaurant?.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <FaStar className="text-red-500" />
              <span className="text-gray-700"> {restaurant?.rating}</span>

              <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition cursor-pointer">
                Yorumları Gör
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDetail;
