import React from "react";
import { Link } from "react-router-dom";
import { IoRestaurant } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

const Header = () => {

  // stora abone ol

  const {restaurants} = useSelector((store)=>store.restaurantReducer)
  const {cart} = useSelector((store)=>store.cartReducer)
 
  const totalAmount = cart.reduce((total,i) => total + i.amount, 0)
 
  
  return (
    <header className="shadow">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-red-500 font-[900] text-xl sm:text-3xl font-mono"
        >
          ThunkSepeti
        </Link>

        <div className="flex gap-5 ">
          <Link to="/" className="flex items-center gap-1 hover:underline">
           <span className="hidden sm:block">Yakınınızda</span> {restaurants.length}
            <IoRestaurant className="text-red-500" />
            <span className="hidden sm:block">Restoran var</span>
          </Link>

          <button className="button">Giriş Yap</button>
          <button className="button">Kayıt Ol</button>

          <Link to="/cart" className="basket-button">
            <BsBasket />
            <span className="font-semibold">{totalAmount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
