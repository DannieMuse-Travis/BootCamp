import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/layout/Layout"
import HomeScreen from "../pages/HomeScreen"

export const MainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            }
        ]
    }
])