import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addHistory } from "../../Redux/Action/filterAndHstoryAction";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const handleAddHistory = (blog) => {
    dispatch(addHistory(blog));
  };

  return (
    <div className="hover:shadow-xl p-3" onClick={() => handleAddHistory(blog)}>
      <Link to={`/details/${blog._id}`}>
        <img
          className=" w-full h-56 rounded-lg md:h-72"
          src={blog.img}
          alt=""
        />

        <div className="mt-8">
          <h1 className="mt-4 text-xl font-semibold text-gray-600 dark:text-white">
            {blog.title}
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {blog.description.length > 170
              ? blog.description.slice(0, 170)
              : blog.description}
            .....
          </p>

          <div className="flex items-center justify-center mt-4">
            <button className="btn btn-secondary w-full">Post details</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
