import actionTypes from "../actionTypes";
import api from './../../utils/api';

const getRestaurants = () => {
  return async (dispatch) => {
    // reducera haber ver
    dispatch({ type: actionTypes.restaurantLoading });
    // api isteği at
    api
      .get("/restaurants")
      .then((res) => {
        dispatch({ type: actionTypes.restaurantSuccess, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.restaurantError, payload: err.message });
      });
  };
};
export { getRestaurants };
