import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import combineRecers from './reducers/combineReducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: combineRecers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
