import React from 'react'
import Hero from './Home/Hero'
import Wrapper from './Home/Wrapper'
import Holder from './Home/Holder'
import SignIn from './Auth/SignIn'



const HomeScreen = () => {
  return (
    <div>
        <Hero/>
        <Wrapper/>
        <Holder/>
        <SignIn/>
    </div>
  )
}

export default HomeScreen