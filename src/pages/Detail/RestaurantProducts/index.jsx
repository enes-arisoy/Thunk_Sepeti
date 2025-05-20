import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../utils/api";
import { FaFire } from "react-icons/fa";
import Card from "./Card";

const RestaurantProducts = () => {
  // Url'deki id değerine eriş
  const { id } = useParams();

  // State oluştur
  const [restaurants, setRestaurants] = useState([]);
  const [isError, setIsError] = useState(null);

  // İd'si bilinen restaurant'ın ürünleri için api isteği at
  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => {
        setRestaurants(res.data);
      })
      .catch((err) => {
        setIsError(err.message);
      });
  }, []);

  return (
    <>
      {isError ? (
        <h1>Hataaa</h1>
      ) : restaurants.length == 0 ? (
        <h1>Restaurant servis dışı</h1>
      ) : (
        <div>
          {/* Top */}
          <div>
            <h2
              className="text-2xl flex items-center gap-2 font-bold
            "
            >
              <FaFire className="text-red-500" /> Popüler
            </h2>

            <p className="text-gray-600">
              Restoranın en çok tercih edilen ürünleri
            </p>
          </div>
          {/* Restaurant Products */}
          <div className="grid lg:grid-cols-2 gap-5 mt-6">
            {restaurants.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantProducts;