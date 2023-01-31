import { addBlog } from "../../Action/BlogsAction";

export const addNewblog = (blog) => {
  return async (dispatch) => {
    const res = await fetch(
      "https://practice-server-ripassorker2.vercel.app/blog",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(
        addBlog({
          _id: data.insertedId,
          ...blog,
        })
      );
    }
  };
};
