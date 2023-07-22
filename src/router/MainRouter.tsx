import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/layout/Layout"
// import signupLayout from "../components/layout/authLayout/signupLayout"
import HomeScreen from "../pages/HomeScreen"
import SignIn from "../pages/Auth/SignIn"
import Register from "../pages/Auth/Register"
import SignLayout from "../components/layout/SignLayout"
import Screen from "../pages/Home/Screen"
import DashHeader from "../pages/Dashboard/DashHeader"
import DashBoard from "../pages/Dashboard/DashBoard"
import Community from "../pages/Home/Community"




export const MainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index: true,
                element:<HomeScreen/>, 
            }, 
        ]
    }, {
        path: "/auth",
        element: <SignLayout/>,
        children : [
        {
            index: true,
            element: <SignIn/>,
            path: "/auth/signIn"
        }
        ]
    },
    {
        path:"/library",
        element:<Screen/>

    },
    {
        path:"/community",
        element:<Community/>

    },
    {
        path:"/regsiter",
        element:<Register/>

    },
    {
        path:"/dashboard",
        element:<SignLayout/>,
        children:[
            {
                index: true,
                element:<DashBoard/>, 
            }, 
        ]
    }   
    

   
])