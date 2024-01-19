import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

export const initialState={}

const middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk);

const store= configureStore({
    reducer:reducer, 
    preLoadedState:initialState, 
    middleware:middleware
})

export default store