import React from 'react'
import styled from 'styled-components'
import CreativeButton from '../../components/static/CreativeButton'
import Pic from "../../assets/discover-preview.png"
const Screen = () => {
  return (
    <div>
        <Container>
            <Main>
                <Card>
                    <BigText>Songcraft Discover</BigText>
                    <SmallText>Find collaborators. Share music. Get feedback.</SmallText>
                    <CreativeButton cc='white' title='get Early Access' bgs="#3569a0"/>
                    <Img src={Pic}/>
                </Card>
            </Main>
        </Container>
    </div>
  )
}

export default Screen
const Img = styled.img`
height:400px;
width:1000px;`
const Card = styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap: 20px;

`
const SmallText = styled.div``
const  BigText = styled.div`
font-weight:700;
font-size:40px;
`
const  Main = styled.div`
width: fit-content;
justify-content:center;
display:flex;
align-items:center;`
const Container = styled.div`
width:100vw;
height:90vh;
background-color:#f7f5ef;
display:flex;
justify-content: center;
`