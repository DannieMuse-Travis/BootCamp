import React from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from '../../pages/Dashboard/DashHeader'
import Sider from '../static/Sider'

const SignLayout = () => {
  return (
    <div>
      <DashHeader/>
        <span style={{display: 'flex', width: '100%'}}> <Sider/> <Outlet/></span>
        
    </div>
  )
}

export default SignLayout