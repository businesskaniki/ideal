import { ADD_IMAGE, DELETE_IMAGE, FETCH_IMAGE, FETCH_IMAGES, REMOVEIMAGE, UDPDATE_IMAGE } from "../constants/constants";

const initialState = [];

const FethchImageReducer = (state = initialState, action) => {
    switch (action.type) {
      case `${FETCH_IMAGES}/fulfilled`:
        return action.payload;
      case `${REMOVEIMAGE}fulfilled`: {
        return state.filter((state) => state.id !== action.payload);
      }
      case DELETE_IMAGE:
        // No need to update the state here, just return it as is
        return state;
      default:
        return state;
    }
  };
  
  export default FethchImageReducer;

  export const AddImageReducer = (state = {}, action) => {
    switch (action.type) {
      case `${ADD_IMAGE}/fulfilled`: {
        return { ...state, ...action.payload };
      }
      default:
        return state;
    }
  };

  export const ImageReducer = (state = {}, action) => {
    switch (action.type) {
      case `${FETCH_IMAGE}fulfilled`: {
        return { ...state, ...action.payload };
      }
      case `${UDPDATE_IMAGE}fulfilled`: {
        return { ...state, ...action.payload };
      }
      default:
        return state;
    }
  };