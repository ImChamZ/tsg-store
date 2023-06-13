import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { PRODUCT_API_BASE } from './products';

// saga to fetch categories
function* fetchCategories() {
  try {
    const { data } = yield axios(`${PRODUCT_API_BASE}/categories`);
    yield put({ type: 'category/success', payload: data });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    yield put({ type: 'category/error', message: e.message });
  }
}

const productSagas = [takeEvery('category/pending', fetchCategories)];

export default productSagas;
