import { deleteBlogs } from "../../Action/BlogsAction";

export const deleteBlogData = (id) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://practice-server-ripassorker2.vercel.app/blog/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(deleteBlogs(id));
    }
  };
};
