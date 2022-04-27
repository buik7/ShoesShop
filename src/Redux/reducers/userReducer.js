import {actionTypes} from '../constants/actionTypes';

const initialState = {
  user: null,
  favouriteProducts: [],
};

// A reducer used to store user information
const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_USER_INFO:
      return {...state, user: payload};

    case actionTypes.SET_USER_FAVOURITE_PRODUCTS:
      return {...state, favouriteProducts: payload};

    default:
      return state;
  }
};

export default userReducer;
