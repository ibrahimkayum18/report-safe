import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "./AuthProviders";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(isAdminLoading || loading){
        return <h2>Loading...</h2>
    }

    if(!user || !isAdmin){
        toast.error("Please Log in First")
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return children;
};

export default AdminRoute;