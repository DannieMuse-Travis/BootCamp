import React from 'react'
import styled from 'styled-components'
import{ AiOutlineMenu} from "react-icons/ai"
interface iCard{
    text:string;
    title:string;
    icons:string;

}
const Card = () => {
  return (
    <div>
        <Container>
            <Main>
            <Card1>
              <Top>
              
                  <Icons>
                  <AiOutlineMenu/>
                  </Icons>
                <Title>Stay Organized</Title>
              </Top>
                <Text>
                Tired of losing files, notes, & audio<br/> clips? Capture and organize every idea<br/>, no matter where you are.
                </Text>
              </Card1>
            </Main>
        </Container>
    </div>
  )
}

export default Card

const Top = styled.div`
display:flex;
margin:10px;
`
const Text = styled.div``
const Title = styled.div`
top:50px;
font-weight:400;
font-size:30px;`
const Icons = styled.div`
left:20px;`
const Card1 = styled.div``

// const Image = styled.div<{bg?:string}>`
// width: 50px;
// height: 50px;
// border-radius: 50%;
// background-color: ${({bg})=> bg} ;
// `
// const Text2 = styled.div``
const Main = styled.div`

margin-left: 10px;
background-color:red;
height:40%;
width:30%;
`


const Container = styled.div`
width: 100%;
height: 80%;
background-color:#3569A0 ;
display: flex;
flex-direction: column;
padding: 10px;
margin: 10px;`