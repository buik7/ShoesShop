import {actionTypes} from '../constants/actionTypes';

const initialState = {
  productList: [],
  featuredProductList: [],
  productDetail: null,
};

const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_PRODUCT_LIST:
      state.productList = payload;
      return {...state};

    case actionTypes.SET_PRODUCT_DETAIL:
      state.productDetail = payload;
      return {...state};

    case actionTypes.SET_FEATURE_PRODUCT_LIST:
      state.featuredProductList = payload;
      return {...state};

    default:
      return state;
  }
};

export default productReducer;
