import { deleteBlogs } from "../../Action/BlogsAction";

export const deleteBlogData = (id) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://noon-server.vercel.app/blog/${id}`,
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
