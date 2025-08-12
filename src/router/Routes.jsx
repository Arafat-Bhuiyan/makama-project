import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import PatientTable from "../pages/Dashboard/Patient/Patient";

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
        path: "/patients",
        element: <PatientTable />,
      },
    ],
  },
]);

export default router;
