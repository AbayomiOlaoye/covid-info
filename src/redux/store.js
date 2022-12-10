import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import CovidReducer from './fetchData';

const reducer = combineReducers({
  data: CovidReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
