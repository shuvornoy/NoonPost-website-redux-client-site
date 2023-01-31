import { updateteBlog } from "../../Action/BlogsAction";

export const updateteBlogData = (blogData) => {
  const { title, img, description, id, currentDate, currentTime } = blogData;
  const blog = {
    title,
    img,
    description,
    currentDate,
    currentTime,
  };
  return async (dispatch) => {
    const res = await fetch(
      `https://practice-server-ripassorker2.vercel.app/blog/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      console.log("inside", data);
      dispatch(updateteBlog(data));
    }
  };
};
