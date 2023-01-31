import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteBlogData } from "../../Redux/thunk/blogThunks/deleteBlogData";
import { lodedBlogsData } from "../../Redux/thunk/blogThunks/fetchBlogs";

const Allblogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogsReducer);

  useEffect(() => {
    dispatch(lodedBlogsData());
  }, [dispatch]);

  const handledeleteBlog = (id) => {
    const agree = window.confirm("Are you sure ? You want to remeve this...");
    console.log(agree);
    if (agree) {
      dispatch(deleteBlogData(id));
      toast.success("Blog deleted succesfully....");
    } else {
      return;
    }
  };

  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-800 ">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-800 text-gray-300">
            <tr className="text-left">
              <th className="p-3">Photo</th>
              <th className="p-3">Title</th>
              <th className="p-3">Update</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog) => (
              <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                <td className="md:p-2 p-1">
                  <img className="h-16 w-24 rounded" src={blog.img} alt="" />
                </td>
                <td className="md:p-2 p-1">
                  <p>{blog.title}</p>
                </td>
                <td className="md:p-2 p-1">
                  <Link to={`/update/${blog._id}`}>
                    <button className="btn btn-secondary btn-sm btn-outline">
                      Update
                    </button>
                  </Link>
                </td>
                <td className="md:p-2 p-1">
                  <button
                    onClick={() => handledeleteBlog(blog._id)}
                    className="btn btn-primary btn-sm btn-outline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allblogs;
