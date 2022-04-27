import {DOMAIN} from './constants';
import request from './request';

export const getUserFavouriteProductsService = () => {
  return request(
    {
      method: 'GET',
      url: `${DOMAIN}/Users/getproductfavorite`,
    },
    true,
  );
};

export const likeProductService = productId => {
  return request(
    {
      method: 'GET',
      url: `${DOMAIN}/Users/like?productId=${productId}`,
    },
    true,
  );
};

export const unLikeProductService = productId => {
  return request(
    {
      method: 'GET',
      url: `${DOMAIN}/Users/unlike?productId=${productId}`,
    },
    true,
  );
};
