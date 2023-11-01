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
                element:<Report></Report>
            },
            {
                path:'/incident-map',
                element:<IncidentMap></IncidentMap>
            },
            {
                path:'/safety-tips',
                element:<SafetyTips></SafetyTips>
            },
            {
                path:'/your-reports',
                element:<YourReports></YourReports>
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