import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddVisa from "../Pages/AddVisa";
import AllVisa from "../Pages/AllVisa";
import VisaDetails from "../Pages/VisaDetails";
import PrivateRoute from "./PrivateRoute";
import MyVisaApplications from "../Pages/MyVisaApplications";
import MyAddedVisas from "../Pages/MyAddedVisas";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addVisa",
                element: <PrivateRoute>
                    <AddVisa></AddVisa>
                </PrivateRoute>
            },
            {
                path: "/allVisa",
                element: <AllVisa></AllVisa>
            },
            {
                path: "/visaDetails/:id",
                element: <PrivateRoute>
                    <VisaDetails></VisaDetails>
                </PrivateRoute>
            },
            {
                path: "/myVisaApplications",
                element: <PrivateRoute>
                    <MyVisaApplications></MyVisaApplications>
                </PrivateRoute>
            },
            {
                path: "/myAddedVisas",
                element: <PrivateRoute>
                    <MyAddedVisas></MyAddedVisas>
                </PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
]);

export default routes;