
import actionTypes from "../actionTypes";

const initialState = {
  cart: [],
  isLoading: true,
  error: null,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // yükleme durumu
    case actionTypes.cartLoading:
      return { ...state, isLoading: true };
    // hata durumu
    case actionTypes.cartError:
      return { ...state, isLoading: false, error: action.payload };

    // başarıyla veri gelme durumu
    case actionTypes.cartSuccess:
      return { ...state, isLoading: false, error: null, cart: action.payload };

    // eleman ekleme durumu
    case actionTypes.addItem:
      return {
        ...state,
        isLoading: false,
        error: null,
        cart: state.cart.concat(action.payload),
      };

    // eleman güncelleme durumu
    case actionTypes.updateItem:
      const updateCart = state.cart.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, cart: updateCart };

     // eleman silme durumu
     case actionTypes.deleteItem:
       const filtered = state.cart.filter((item) =>
         item.id !== action.payload);
       return { ...state, cart: filtered };

    default:
      return state;
  }
};
export default cartReducer;
