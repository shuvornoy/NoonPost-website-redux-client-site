import { ADD_BLOG, DELETE_BLOG, LOAD_BLOGS } from "../Constants/Constants";

const initialState = {
  blogs: [],
};

export const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    // case UPDATE_BLOG:
    //   return {
    //     ...state,
    //     blogs:,
    //   };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((b) => b._id !== action.payload),
      };

    default:
      return state;
  }
};
