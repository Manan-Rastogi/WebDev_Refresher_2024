import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  { //             route
    path:"/",
    element: <Root />,
    errorElement:<ErrorPage/>,                       // handling error
    children: [
      { ///////////////////// nested route
        path: "contacts/:contactId",
        element: <Contact />               // We need to tell the root route where we want it to render its child routes. We do that with <Outlet> in routes/root.jxs
      }
    ],
  },
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* This first route is what we often call the "root route" since the rest of our routes will render inside of it. It will serve as the root layout of the UI, we'll have nested layouts as we get farther along. */}
    <RouterProvider router={router} />
  </StrictMode>
);
