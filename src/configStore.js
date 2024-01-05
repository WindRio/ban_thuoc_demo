import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/index';
import roootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(roootSaga);
