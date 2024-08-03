import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home./Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Videos from "./pages/Videos/Videos";
import Research from "./pages/Research/Reserach";
import Consultations from "./pages/Consultations/Consultations";
import Blogs from "./pages/Blogs/Blogs";

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
        path: "/consultations",
        element: <Consultations />
      },
      {
        path: "/blogs",
        element: <Blogs />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);