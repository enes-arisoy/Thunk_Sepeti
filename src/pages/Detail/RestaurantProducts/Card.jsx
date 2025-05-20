import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../../Redux/actions/basketAction";


const Card = ({ item }) => {
  // Ürün sepette var mı kontrol et eğer varsa miktar değerine eriş
  const { cart } = useSelector((store) => store.cartReducer);

  const found = cart.find((product) => product.id === item.id);

  // Dispatch Kurulumu
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    found ? dispatch(updateItem(found.id, found.amount + 1)) : dispatch(addItem(item));
  };

  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 shadow  p-3 rounded-lg hover:bg-red-100 cursor-pointer transition duration-300 hover:scale-[1.02]">
      <div>
        {/* Title && Description */}
        <div className="flex flex-col justify-between">
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <p className="my-1.5 text-gray-500">{item.title}</p>
        </div>
        {/* Price */}
        <p className="text-lg font-semibold">{(item.price * 10).toFixed(2)} TL</p>
      </div>

      <div className="relative">
        <img className="rounded-md object-cover size-full" src={item.photo} alt="product-image" />

        <button
          type="button"
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-white rounded-full size-8 grid place-items-center font-bold cursor-pointer hover:bg-amber-500 transition duration-200"
        >
          {found ? found.amount : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default Card;