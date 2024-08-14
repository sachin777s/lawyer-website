import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Videos from "./pages/Videos/Videos";
import Research from "./pages/Research/Reserach";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ResearchDetails from "./pages/ResearchDetails/ResearchDetails";
import Appointment from "./pages/Appointment/Appointment";

const router = createBrowserRouter([
  {

    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/videos",
        element: <Videos />
      },
      {
        path: "/research",
        element: <Research />
      },
      {
        path: "/research-details/:id",
        element: <ResearchDetails />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blog-details/:id",
        element: <BlogDetails />
      },
      {
        path: "/appointment",
        element: <Appointment />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);