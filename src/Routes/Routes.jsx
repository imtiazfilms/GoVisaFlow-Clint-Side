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
import PrivetRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome";
import DashboardOverview from "../Components/DashboardOverview";
import Contact from "../Pages/Contact";


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
                path: "/allVisa",
                element: <AllVisa></AllVisa>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/visaDetails/:id",
                element: <PrivateRoute>
                    <VisaDetails></VisaDetails>
                </PrivateRoute>
            },
            
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome></DashboardHome>
            },
            {
                path: "addVisa",
                element: <PrivetRoute>
                    <AddVisa></AddVisa>
                </PrivetRoute>
            },
            {
                path: "myAddedVisas",
                element: <PrivetRoute>
                    <MyAddedVisas></MyAddedVisas>
                </PrivetRoute>
            },
            {
                path: "myVisaApplications",
                element: <PrivetRoute>
                    <MyVisaApplications></MyVisaApplications>
                </PrivetRoute>
            },
            {
                path: "overView",
                element: <PrivetRoute>
                    <DashboardOverview></DashboardOverview>
                </PrivetRoute>
            },
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    },
]);

export default routes;