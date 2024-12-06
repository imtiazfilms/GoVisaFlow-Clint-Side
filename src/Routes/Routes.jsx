import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
  },
  {
      path: "*",
      element: <NotFound></NotFound>
  },
]);

export default routes;