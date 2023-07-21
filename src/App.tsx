import React from 'react'
import {RouterProvider} from "react-router-dom"
import { MainRoute } from './router/MainRouter'

const App = () => {
  return (
    <div>
      <RouterProvider router={MainRoute}/>
    </div>
  )
}

export default App