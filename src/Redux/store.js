import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import FethchImageReducer, { AddImageReducer, ImageReducer } from "./reducers/Image_reducers";



const rootReducer = combineReducers({
    Images:FethchImageReducer,
    AddImage:AddImageReducer,
    Image:ImageReducer
  });

  const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

  export default store;
  