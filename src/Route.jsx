import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Report from "./Pages/Report/Report";
import LogIn from "./Pages/LogIn/LogIn";
import IncidentMap from "./Pages/IncidentMap/IncidentMap";
import SafetyTips from "./Pages/SafetyTips/SafetyTips";
import YourReports from "./Pages/YourReports/YourReports";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Register from "./Pages/Register/Register";
import PrivateRouter from "./Providers/PrivateRoute";


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
                path:'/report',
                element:<PrivateRouter><Report></Report></PrivateRouter>
            },
            {
                path:'/incident-map',
                element:<IncidentMap></IncidentMap>
            },
            {
                path:'/safety',
                element:<SafetyTips></SafetyTips>,
                loader: () => fetch('http://localhost:5000/safety')
            },
            {
                path:'/your-reports',
                element:<YourReports></YourReports>,
                loader: () => fetch('http://localhost:5000/reports')
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
    }
])

export default Route;