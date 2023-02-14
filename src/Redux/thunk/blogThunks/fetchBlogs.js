import { loadBlogs } from "../../Action/BlogsAction";

export const lodedBlogsData = () => {
  return async (dispatch) => {
    const res = await fetch("https://noon-server.vercel.app/blogs");
    const data = await res.json();
    if (data) {
      dispatch(loadBlogs(data));
    }
  };
};
