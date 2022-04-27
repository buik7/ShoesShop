import {STATUS_CODE} from '../../Services/constants';
import {
  getUserFavouriteProductsService,
  likeProductService,
  unLikeProductService,
} from '../../Services/userService';
import {setUserFavouriteProductsAction} from '../actions/userAction';

export const getUserFavouriteProductsThunk = async dispatch => {
  try {
    const res = await getUserFavouriteProductsService();
    if (res.status === STATUS_CODE.SUCCESS) {
      dispatch(
        setUserFavouriteProductsAction(res.data.content.productsFavorite),
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const likeProductThunk = productId => {
  return async dispatch => {
    try {
      const res = await likeProductService(productId);
      if (res.status === STATUS_CODE.SUCCESS) {
        dispatch(getUserFavouriteProductsThunk);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const unLikeProductThunk = productId => {
  return async dispatch => {
    try {
      const res = await unLikeProductService(productId);
      if (res.status === STATUS_CODE.SUCCESS) {
        dispatch(getUserFavouriteProductsThunk);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
