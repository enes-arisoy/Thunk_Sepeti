import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/index";
import Detail from "./pages/Detail/index";
import Cart from "./pages/Cart/index";
import { getRestaurants } from "../src/Redux/actions/restaurantAction";
import { useDispatch } from "react-redux";
import { getBasket } from "./Redux/actions/basketAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // restaurant verilerini al
    dispatch(getRestaurants());

    // cart verilerini al
    dispatch(getBasket());
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
