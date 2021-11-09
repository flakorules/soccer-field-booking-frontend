import { types } from "../types/types";

const initialState = {
  showLoading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setShowLoading:
      return {
        ...state,
        showLoading: action.payload,
      };

    default:
      return state;
  }
};
