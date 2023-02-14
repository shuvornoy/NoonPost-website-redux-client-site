import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fristUpLoad,
  lastUpLoad,
} from "../../Redux/Action/filterAndHstoryAction";
import { lodedBlogsData } from "../../Redux/thunk/blogThunks/fetchBlogs";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => state.blogsReducer);
  const { fristUp, lastUp } = useSelector(
    (state) => state.filterAndHistoryReducer.filter
  );

  useEffect(() => {
    dispatch(lodedBlogsData());
  }, [dispatch]);

  let content;

  if (blogs.length && fristUp) {
    content = blogs
      .sort(
        (a, b) =>
          a.currentTime.localeCompare(b.currentTime) ||
          a.currentDate.localeCompare(b.currentDate)
      )

      .map((blog, i) => <BlogCard key={i} blog={blog} />);
  }
  if (blogs.length && lastUp) {
    content = blogs
      .sort(
        (b, a) =>
          a.currentTime.localeCompare(b.currentTime) ||
          a.currentDate.localeCompare(b.currentDate)
      )
      .map((blog, i) => <BlogCard key={i} blog={blog} />);
  }

  if (blogs.length) {
    content = blogs?.map((blog, i) => <BlogCard key={i} blog={blog} />);
  }
  return (
    <div className="max-w-screen-xl w-[92%] mx-auto">
      <h1 className="text-5xl text-center font-semibold text-gray-800 mt-14">
        Noon Post Blogs
      </h1>
      <div className="flex justify-end my-7">
        <button
          onClick={() => dispatch(fristUpLoad())}
          className={`btn  btn-sm mx-2 ${fristUp ? "btn-secondary" : null}`}
        >
          First Post
        </button>
        <button
          onClick={() => dispatch(lastUpLoad())}
          className={`btn  btn-sm mx-2 ${lastUp ? "btn-secondary" : null}`}
        >
          Last Post
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-8 ">
        {content}
      </div>
    </div>
  );
};

export default Blogs;
