import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";
import ListGenre from "../pages/ListGenre";
import RegisterAdmin from "../pages/RegisterAdmin";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) throw redirect("/login");
      return null;
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/genres",
        element: <ListGenre />,
      },
      {
        path: "/register-admin",
        element: <RegisterAdmin />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.access_token) throw redirect("/");
      return null;
    },
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
