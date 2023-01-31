import { loadBlogs } from "../../Action/BlogsAction";

export const lodedBlogsData = () => {
  return async (dispatch) => {
    const res = await fetch(
      "https://practice-server-ripassorker2.vercel.app/blogs"
    );
    const data = await res.json();
    if (data) {
      dispatch(loadBlogs(data));
    }
  };
};
