import { ADD_TAG, DELETE_TAG, FETCH_TAG, FETCH_TAGS, REMOVETAG, UDPDATE_TAG } from "../constants/constants";

const initialState = [];

const FethchTagReducer = (state = initialState, action) => {
    switch (action.type) {
      case `${FETCH_TAGS}/fulfilled`:
        return action.payload;
      case `${REMOVETAG}fulfilled`: {
        return state.filter((state) => state.id !== action.payload);
      }
      case DELETE_TAG:
        // No need to update the state here, just return it as is
        return state;
      default:
        return state;
    }
  };
  
  export default FethchTagReducer;

  export const AddTagReducer = (state = {}, action) => {
    switch (action.type) {
      case `${ADD_TAG}/fulfilled`: {
        return { ...state, ...action.payload };
      }
      default:
        return state;
    }
  };

  export const TagReducer = (state = {}, action) => {
    switch (action.type) {
      case `${FETCH_TAG}fulfilled`: {
        return { ...state, ...action.payload };
      }
      case `${UDPDATE_TAG}fulfilled`: {
        return { ...state, ...action.payload };
      }
      default:
        return state;
    }
  };