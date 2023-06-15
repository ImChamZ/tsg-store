// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axiosClient from '../../service/axios';

export const PRODUCT_API_BASE = 'https://dummyjson.com/products';

// saga to fetch product list
function* fetchProducts(action) {
  try {
    const { data } = yield axiosClient(
      `${PRODUCT_API_BASE}${action.payload && `/${action.payload}`}`
    );
    yield put({ type: 'products/success', payload: data });
  } catch (e: any) {
    yield put({ type: 'app/error', message: e.message });
  }
}

// saga to fetch product list
function* fetchProduct(action) {
  try {
    const { data } = yield axiosClient(
      `${PRODUCT_API_BASE}${action.payload && `/${action.payload}`}`
    );
    yield put({ type: 'products/success', payload: data });
  } catch (e: any) {
    yield put({ type: 'app/error', message: e.message });
  }
}

// saga to fetch products
function* fetchProductsByCategory(action) {
  try {
    const { data } = yield axiosClient(
      `${PRODUCT_API_BASE}/category/${action.payload}`
    );
    yield put({ type: 'products/success', payload: data });
  } catch (e: any) {
    yield put({ type: 'app/error', message: e.message });
  }
}

// saga to search products
function* searchProducts(action) {
  try {
    const { data } = yield axiosClient(
      `${PRODUCT_API_BASE}/search?q=${action.payload}`
    );
    yield put({ type: 'products/success', payload: data });
  } catch (e: any) {
    yield put({ type: 'app/error', message: e.message });
  }
}

const productSagas = [
  takeEvery('products/pending', fetchProducts),
  takeLatest('products/pendingProduct', fetchProduct),
  takeLatest('products/pendingSearch', searchProducts),
  takeLatest('products/pendingByCategory', fetchProductsByCategory),
];

export default productSagas;
