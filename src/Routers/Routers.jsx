import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "classes",
                element: <Classes></Classes>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    },
]);