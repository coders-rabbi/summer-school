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
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TextComponent from "../Pages/Home/TestComponent/TextComponent";
import MySelectedCourse from "../Pages/Dashboard/MySelectedCourse/MySelectedCourse";
import MyEnrollCoures from "../Pages/Dashboard/MyEnrollCourse/MyEnrollCoures";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";


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
                element: <PrivateRoute><Classes></Classes></PrivateRoute>
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
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/my-Cart',
                element: <MySelectedCourse></MySelectedCourse>
            },
            {
                path: 'enrolled-course',
                element: <MyEnrollCoures></MyEnrollCoures>
            },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            
            {
                path: 'manageClasses',
                element: <ManageClass></ManageClass>
            },
            
        ]
    }
]);