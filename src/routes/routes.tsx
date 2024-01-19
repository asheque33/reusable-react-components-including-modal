import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/Layout/AdminLayout";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>Admin panel Home page</h1>,
      },
      {
        path: "add-admin",
        element: <h3>To add multiple admin place</h3>,
      },
    ],
  },
]);

export default router;
