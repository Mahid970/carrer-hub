import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home.jsx";
import Statistics from "./components/statistics/Statistics.jsx";
import AppliedJobs from "./components/applied-jobs/AppliedJobs.jsx";
import Blog from "./components/blog/Blog.jsx";
import ErrorPage from "./components/error-page/ErrorPage.jsx";
import JobDetails from "./components/home/feature-jobs/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/jobs/:routId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/public/jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
