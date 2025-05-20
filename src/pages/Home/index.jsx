import React from "react";
import { useSelector } from "react-redux";
import Card from './Card/index';

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  return (
    <div className="container">
<h1 className="font-semibold text-center text-xl md:text-2xl mb-5">Yakınınızdaki Restoranlar</h1>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {restaurants.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}

      
    </div>
  );
};

export default Home;
