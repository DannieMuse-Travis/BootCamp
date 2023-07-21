import React from 'react'
import styled from 'styled-components'
import ButtonProsp from '../../components/static/ButtonProsp'
import Pix from "../../assets/lyrics.png"
import wavy from "../../assets/wave.svg"

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>
                <BigText>Write better songs.
                    <span style={{backgroundColor: "#F5F19C"}}>Together.</span>
                </BigText>
                <SmallText>
                A collaborative platform for your lyrics, chords, tabs, and recordings.
                </SmallText>
                <But>
                <ButtonProsp
                text='Get started-it`s free'
                padding='20px 20px'
                />
                </But>
                                <Pic>
                <Img src={Pix}/>
                 </Pic>
                </Text>
               
            </Main>
            < Vid src={wavy}/>
        </Container>

    </div>
  )
}

export default Hero


    
const Vid = styled.img`
background-color:#3569A0;
position: absolute;
bottom: -10px;

`
const Pic = styled.div``

const Img = styled.img`
position: absolute;
top: 40%;
height:60%;
left: 16%;
z-index:4 ;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const But = styled.div`
    width:30%;
    height:40%;
    align-items:center;
    margin-left:250px;
    margin-top:20px;
`
const Text = styled.div`
flex-direction:column;`
const SmallText = styled.div`
margin-left:80px;
font-size:22px;
font-weight:200;`
const BigText =styled.div`
margin-top:80px;
margin-left:60px;
font-weight:700;
font-size:50px;

::span{
    background-color:#F5F19C;
}`

const Main = styled.div`
/* background-color:red; */
width:90%;
height:80%;
justify-content:center;
display:flex;

`
const Container = styled.div`
position: relative;
height:120vh;
width:100%;
background-color:#F7F5EF;
justify-content:center;
display:flex;
`
