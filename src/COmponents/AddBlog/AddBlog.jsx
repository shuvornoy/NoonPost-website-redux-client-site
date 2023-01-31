import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewblog } from "../../Redux/thunk/blogThunks/addBlog";

const AddBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
  var currentTime = `${date.getHours()}:${date.getMinutes()}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const photoUrl = event.target.photoUrl.value;
    const description = event.target.description.value;

    const blog = {
      title,
      img: photoUrl,
      description,
      currentDate,
      currentTime,
    };
    console.log(blog);
    dispatch(addNewblog(blog));
    event.target.reset();
    toast.success("Blog added succesfully...");
    navigate("/dashboard/allBlogs");
  };

  return (
    <div className="p-6 flex items-center justify-center my-10">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-10 ">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className=" text-xl font-semibold">Blog Details</p>
              <p className="text-lg">Please fill out all the fields.</p>
            </div>
            <form onSubmit={handleSubmit} className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-3">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
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
                      type="text"
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
