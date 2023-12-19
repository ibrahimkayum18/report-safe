import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Report from "./Pages/Report/Report";
import LogIn from "./Pages/LogIn/LogIn";
import SafetyTips from "./Pages/SafetyTips/SafetyTips";
import YourReports from "./Pages/YourReports/YourReports";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Register from "./Pages/Register/Register";
import PrivateRouter from "./Providers/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserProfile from "./Pages/Dashboard/UserPanel/UserProfile/UserProfile";
import UserReviews from "./Pages/Dashboard/UserPanel/Review/UserReviews";
import AdminProfile from "./Pages/Dashboard/AdminPanel/AdminProfile/AdminProfile";
import ManageUsers from "./Pages/Dashboard/AdminPanel/ManageUsers/ManageUsers";
import ManageReports from "./Pages/Dashboard/AdminPanel/ManageReports/ManageReports";
import ManageReviews from "./Pages/Dashboard/AdminPanel/ManageReviews/ManageReviews";
import SolvedCase from "./Pages/Dashboard/AdminPanel/SolvedCase/SolvedCase";
import AddSuccessStory from "./Pages/Dashboard/AdminPanel/AddSuccessStory/AddSuccessStory";
import AdminRoute from "./Providers/AdminRoute";


const Route = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/safety',
                element:<SafetyTips></SafetyTips>,
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRouter><Dashboard /></PrivateRouter>,
        children:[
            {
                path:'user-profile',
                element:<UserProfile />
            },
            {
                path:'add-report',
                element:<Report />
            },
            {
                path:'your-report',
                element:<YourReports />
            },
            {
                path:'review',
                element:<UserReviews />
            },

            // Admin Routes
            {
                path:'admin-profile',
                element:<AdminRoute><AdminProfile /></AdminRoute>
            },
            {
                path:'manage-users',
                element:<AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path:'manage-reports',
                element:<AdminRoute><ManageReports /></AdminRoute>
            },
            {
                path:'reviews',
                element:<AdminRoute><ManageReviews /></AdminRoute>
            },
            {
                path:'solved-case',
                element:<AdminRoute><SolvedCase /></AdminRoute>
            },
        ]
    }
])

export default Route;