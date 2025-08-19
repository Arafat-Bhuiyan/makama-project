import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import { ComplaintsForm } from "../pages/Dashboard/Complaints/ComplaintsForm";
import { NursesHome } from "../pages/NursesHome/NursesHome";
import NurseNormalReport from "../pages/NursesHome/NurseNormalReport";
import NursePrescription from "../pages/NursesHome/NursePrescription";
import { PharmacistsHome } from "../pages/Pharmacists/PharmacistsHome";
import PharmacyOrderInterface from "../pages/Pharmacists/PharmacyOrderInterface";
import AddProductModal from "../pages/Pharmacists/AddProduct";

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
        path: "/complaintsForm",
        element: <ComplaintsForm />,
      },
      {
        path: "/nursesHome",
        element: <NursesHome />,
      },
      {
        path: "/nurseNormalReport",
        element: <NurseNormalReport />,
      },
      {
        path: "/nursePrescription",
        element: <NursePrescription />,
      },
      {
        path: "/pharmacistsHome",
        element: <PharmacistsHome />,
      },
      {
        path: "/pharmacyOrderInterface",
        element: <PharmacyOrderInterface />,
      },
      {
        path: "/addProductModal",
        element: <AddProductModal />,
      },
    ],
  },
]);

export default router;
