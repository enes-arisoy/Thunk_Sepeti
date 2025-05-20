import { toast } from "react-toastify";
import api from "../../utils/api";
import actionTypes from "../actionTypes";

const getBasket = () => {
  return async (dispatch) => {
    // yükleme durumu
    dispatch({
      type: actionTypes.restaurantLoading,
    });

    // api isteği veri gelirse success gelmezse error
    api
      .get("/cart")
      .then((res) => {
        dispatch({ type: actionTypes.cartSuccess, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.cartError, payload: err });
      });
  };
};

// sepete ürün ekleyen fonksiyon
const addItem = (product) => {
  return async (dispatch) => {
    // sepete eklenecek ürünle alakalı verileri hazırla
    const newItem = {
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      photo: product.photo,
      amount: 1,
    };

    // sepete eklenecek ürün için api isteği at

    api
      .post("/cart", newItem)
      .then(() => {
        dispatch({ type: actionTypes.addItem, payload: newItem });
      })
      .catch((err) => {
        toast.error(`Sepete ürün eklenirken hata oluştu: ${err.message}`);
      });
  };
};

// sepetteki ürünleri güncelleyen fomksiyon
const updateItem = (id, newAmount) => {
  return async (dispatch) => {
    api
      .patch(`/cart/${id}`, { amount: newAmount })
      .then((res) => {
        dispatch({ type: actionTypes.updateItem, payload: res.data });
      })
      .catch((err) =>
        toast.error(`Sepetteki ürün miktarı güncellenirken hata oluştu.`)
      );
  };
};

// ürünü sepetten kaldıran fonksiyon (asenkron thunk aksiyonu)
const deleteItem = (id) => {
  return async (dispatch) => {
    api
      .delete(`/cart/${id}`)
      .then(() => dispatch({ type: actionTypes.deleteItem, payload: id }))
      .catch((err) => toast.error("Bir hata oluştu"));
  };
};

export { getBasket, addItem, updateItem, deleteItem };
