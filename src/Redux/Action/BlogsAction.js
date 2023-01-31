import {
  ADD_BLOG,
  DELETE_BLOG,
  LOAD_BLOGS,
  UPDATE_BLOG,
} from "../Constants/Constants";

export const loadBlogs = (data) => {
  return {
    type: LOAD_BLOGS,
    payload: data,
  };
};
export const addBlog = (data) => {
  return {
    type: ADD_BLOG,
    payload: data,
  };
};
export const updateteBlog = (data) => {
  return {
    type: UPDATE_BLOG,
    payload: data,
  };
};
export const deleteBlogs = (id) => {
  return {
    type: DELETE_BLOG,
    payload: id,
  };
};
