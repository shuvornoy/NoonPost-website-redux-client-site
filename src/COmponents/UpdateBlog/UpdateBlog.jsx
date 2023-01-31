import React from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateteBlogData } from "../../Redux/thunk/blogThunks/updateBlogData";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const blogDetails = useLoaderData();
  const { title, img, description, _id } = blogDetails;

  const dispatch = useDispatch();

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  var currentTime = `${date.getHours()}:${date.getMinutes()}`;

  const handleUpdate = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const photoUrl = event.target.photoUrl.value;
    const description = event.target.description.value;

    const blogData = {
      id: _id,
      title,
      img: photoUrl,
      description,
      currentDate,
      currentTime,
    };
    dispatch(updateteBlogData(blogData));
    toast.success("Blog succecfully updated....");
    navigate("/dashboard/allBlogs");
  };

  return (
    <div className="p-6 flex items-center justify-center my-10">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-10 ">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className=" text-xl font-semibold">Update blog</p>
              <p className="text-lg">Please fill out all the fields.</p>
            </div>
            <form onSubmit={handleUpdate} className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-3">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:border focus:border-gray-600"
                    placeholder="Title"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label>Photo Url</label>
                  <input
                    type="text"
                    name="photoUrl"
                    defaultValue={img}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-none focus:border focus:border-gray-600"
                    placeholder="Photo Url"
                    required
                  />
                </div>

                <div className="md:col-span-5">
                  <label>Description</label>
                  <div className=" bg-gray-50 rounded items-center mt-1">
                    <textarea
                      className="h-14 border mt-1 rounded px-4 pt-1 w-full bg-gray-50 focus:outline-none focus:border focus:border-gray-600"
                      name="description"
                      defaultValue={description}
                      placeholder="Description...."
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end mt-3">
                <button
                  type="submit"
                  className="btn btn-secondary btn-outline btn-sm"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
