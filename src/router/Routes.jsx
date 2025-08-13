import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import NormalReport from "../pages/Dashboard/Patient/NormalReport";
import { ComplaintsForm } from "../pages/Dashboard/Complaints/ComplaintsForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/example",
        element: <NormalReport />,
      },
      {
        path: "/complaintsForm",
        element: <ComplaintsForm />,
      },
    ],
  },
]);

export default router;
