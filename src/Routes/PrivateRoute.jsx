/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../Components/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()

    if(loading){
        return <div className="flex items-center justify-center">
            <span className="loading loading-ball loading-lg"></span>

        </div>
    }

    if (!user) {
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>;
    }
    return children
};

export default PrivetRoute;