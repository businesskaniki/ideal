import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import FethchImageReducer, { AddImageReducer, ImageReducer } from "./reducers/Image_reducers";
import FethchTagReducer, { AddTagReducer, TagReducer } from "./reducers/Tag_reducer";



const rootReducer = combineReducers({
    Tags:FethchTagReducer,
    AddTags:AddTagReducer,
    Tag:TagReducer,
    Images:FethchImageReducer,
    AddImage:AddImageReducer,
    Image:ImageReducer
  });

  const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

  export default store;
  