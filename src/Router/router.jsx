import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../COmponents/AddBlog/AddBlog";
import Allblogs from "../COmponents/AllBlogs/Allblogs";
import BlogsDetails from "../COmponents/BlogsDetails/BlogsDetails";
import ReadngHistory from "../COmponents/ReadingHistory/ReadngHistory";
import UpdateBlog from "../COmponents/UpdateBlog/UpdateBlog";
import DashboardLayout from "../Layout/DashboardLayout";

import Main from "../Layout/Main";
import Dashboard from "../Page/Dashboard/Dashboard";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/history", element: <ReadngHistory /> },

      {
        path: "/details/:id",
        element: <BlogsDetails />,
        loader: ({ params }) =>
          fetch(
            `https://noon-server.vercel.app/blog/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateBlog />,
        loader: ({ params }) =>
          fetch(
            `https://noon-server.vercel.app/blog/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/allBlogs", element: <Allblogs /> },
      { path: "/dashboard/addBlog", element: <AddBlog /> },
    ],
  },
]);
