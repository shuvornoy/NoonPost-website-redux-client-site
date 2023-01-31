import { ADD_HISTORY, FRIST_UPLOAD, LAST_UPLOAD } from "../Constants/Constants";

const initialState = {
  history: [],
  filter: {
    fristUp: false,
    lastUp: false,
  },
};

export const filterAndHistoryReducer = (state = initialState, action) => {
  const selestedHistoryBlog = state?.history?.find(
    (blog) => blog?._id === action?.payload?._id
  );
  switch (action.type) {
    //   filter

    case FRIST_UPLOAD:
      return {
        ...state,
        filter: {
          fristUp: true,
          lastUp: false,
        },
      };
    case LAST_UPLOAD:
      return {
        ...state,
        filter: {
          ...state.filter,
          fristUp: false,
          lastUp: true,
        },
      };

    case ADD_HISTORY:
      if (selestedHistoryBlog) {
        return {
          ...state,
          history: [...state.history],
        };
      } else {
        return {
          ...state,
          history: [...state.history, action.payload],
        };
      }
    default:
      return state;
  }
};

// history
