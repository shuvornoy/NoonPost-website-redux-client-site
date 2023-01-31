import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogsDetails = () => {
  const blogDetails = useLoaderData();
  const { title, img, description } = blogDetails;
  return (
    <header className="">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={img}
              alt="Catalogue-pana.svg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg mx-auto">
              <h1 className="text-2xl font-semibold text-gray-600 lg:text-3xl lg:mt-0 mt-3">
                {title}
              </h1>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogsDetails;
