import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/layout/Layout"
// import signupLayout from "../components/layout/authLayout/signupLayout"
import HomeScreen from "../pages/HomeScreen"
import SignIn from "../pages/Auth/SignIn"
import Register from "../pages/Auth/Register"
import SignLayout from "../components/layout/SignLayout"




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
    }

   
])