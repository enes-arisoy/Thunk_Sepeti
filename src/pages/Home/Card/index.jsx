import React from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartReducer from './../../../Redux/reducers/cartReducer';

const Card = ({ item }) => {




  return (
    <Link
      to={`/detail/${item.id}`}
      className="relative shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition duration-300"
    >
      <span className="bg-red-500 py-1 px-3 text-sm absolute end-1 top-2 text-white rounded-md">
        {item.distance} km Uzaklıkta
      </span>

      <img
        className="w-full h-[250px]"
        src={item.photo}
        alt="restaurant-image"
      />

      <div className="p-3">
        {/* Top */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-xl font-semibold">{item.name}</h3>
          <p className="flex items-center gap-2 text-red-500">
            <FaStar />
            {item.rating}
          </p>
        </div>
        {/* Min Price */}
        <div className="flex  justify-between items-center">
            <p className="text-sm my-3 text-gray-500">{item.minPrice} TL minimum</p>
            {item.isOpen ?  (
            <p className="flex items-center gap-2 font-semibold">
              <span>Open</span>
            </p>
          ): (<span className="text-sm my-3 text-gray-500">Close until 10.30 am</span>) }
        </div>

        {/* Delivery Time && isDeliveryFree */}

        <div className="flex  justify-between items-center">
          {/* Delivery Time */}
          <p className="flex items-center gap-2 font-semibold">
            <FaClock className="text-red-500" />
            <span className="text-gray-500">{item.estimatedDelivery} dak.</span>
          </p>
          {/* isDeliveryFree ?? */}
          {item.isDeliveryFree ? (
            <p className="flex items-center gap-2 font-semibold">
              <MdDeliveryDining className="text-red-500" />
              <span>Ücretsiz</span>
            </p>
          ) : (<p className="flex items-center gap-2 font-semibold">
            <MdDeliveryDining className="text-red-500" />
            <span>Courrier fee charged</span></p>)}
        </div>
      </div>
    </Link>
  );
};

export default Card;
