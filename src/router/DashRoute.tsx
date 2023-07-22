import {createBrowserRouter} from "react-router-dom"
import SignLayout from "../components/layout/SignLayout"

import DashBoard from "../pages/Dashboard/DashBoard"




export const DashBoardRoute = createBrowserRouter([
    {
        path:"/dashboard",
        element:<SignLayout/>,
        children:[
            {
                path: '/dashboard',
                index: true,
                element:<DashBoard/>, 
            }, 
        ]
    },
   
])