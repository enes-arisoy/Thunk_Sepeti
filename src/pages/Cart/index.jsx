import React from "react";
import { useSelector } from "react-redux";
import Loader from "./../../components/Loader/index";
import Error from "./../../components/Error/index";
import Card from "./Card/index";
import Warning from './Warning/index';
import OrderBox from "./OrderBox";



const Cart = () => {
  // sepete abone ol

  const { isLoading, error, cart } = useSelector((store) => store.cartReducer);

  return (
    <>
      <div className="container">
        <h1 className="text-2xl font-bold mb-5 uppercase">Sepet</h1>
        <div className="grid md:grid-cols-[1fr_300px] gap-4">
          <div>
            {isLoading ? (
              <Loader />
            ) : error ? (
              <Error message={error.message} />
            ) : cart.length === 0 ? (
              <Warning />
            ) : (
              cart.map((item, key) => <Card key={key} product={item} />)
            )}
          </div>
          <OrderBox cart = {cart}/>
        </div>
      </div>
    </>
  );
};
export default Cart;
