// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-named-as-default */
import appSlice, { AppSlice } from './appSlice';
import categorySlice, { CategorySlice } from './categorySlice';
import productSlice, { ProductSlice } from './productSlice';

export interface AppState {
  app: AppSlice;
  product: ProductSlice;
  category: CategorySlice;
}

const combineRecers = {
  app: appSlice,
  product: productSlice,
  category: categorySlice,
};

export default combineRecers;
