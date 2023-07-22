import React from 'react'
import Header from '../static/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../static/Footer'
import styled from 'styled-components'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>

        <Footer/>
   
    </div>
  )
}

export default Layout

const Box =styled.div`
  width: 100%;
  height: 70vh;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: blue;
`
const Main =styled.div`
 width: 90%;
  height: 70vh;
  justify-content: space-between;
  display: flex;
  align-items: center;
`