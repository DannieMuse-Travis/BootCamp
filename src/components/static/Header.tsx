import React from 'react'
import styled from 'styled-components'
import ButtonProsp from './ButtonProsp'

const Header = () => {
  return (
    <div>
        <Container>
        <Main>
           <Logo>Creative Write</Logo>
           <NavHolder>
            <Nav>Community</Nav>
            <Nav>Resource</Nav>
            <Nav>Pricing</Nav>
            <Nav>Sign in</Nav>
            <ButtonProsp
            text='Sign Up for Free'
            padding='8px 15px'
            />
           </NavHolder>

        </Main>
        </Container>
    </div>
  )
}

export default Header
const Nav = styled.div`
display:flex;
justify-content:space-between;
margin-top:10px;
margin-right: 30px;
margin-bottom:15px;`
const NavHolder = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
cursor: pointer;
margin-top:10px;`
const Logo = styled.div`
font-size:25px;
font-weight:800;
margin-top:10px;
right:40px;
margin-left:10px;
text-decoration:none`
const Main = styled.div`
/* background-color:red; */
width:90%;
display:flex;
justify-content:space-between;
align-items:center;`
const Container = styled.div`
width:100%;
height:95px;
background-color:#F7F5EF;
justify-content:center;
display:flex;
`
