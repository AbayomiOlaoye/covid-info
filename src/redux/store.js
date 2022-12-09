import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import covidReducer from './fetchData';

const store = configureStore(covidReducer, applyMiddleware(thunk));

export default store;
