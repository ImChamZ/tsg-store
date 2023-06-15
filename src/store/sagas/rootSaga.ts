import { all } from 'redux-saga/effects';
import productSagas from './products';
import categorySagas from './category';

export default function* rootSaga() {
  yield all([...productSagas, ...categorySagas]);
}
