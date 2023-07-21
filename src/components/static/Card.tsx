import React from 'react'
import styled from 'styled-components'


interface cardProps {
    title: string;
    cardIcon: any;
    cardText: string;
}

const Card:React.FC<cardProps> = ({title, cardIcon, cardText}) => {
  return (
    <div>
        <Container>
            <Main>
            <Card1>
              <Top>
                  <Icons>
                    {cardIcon}
                  </Icons>
                <Title>
                    {title}
                </Title>
              </Top>
               <Button>
               <Text>
                    {cardText}
                </Text>
               </Button>
              </Card1>
            </Main>
        </Container>
    </div>
  )
}

export default Card
const Icons = styled.div`
 width:50px;
 height: 50px;
 background-color:white;
 border-radius:50%;
 justify-content:center;
align-items:center;
 display:flex;
 color:#3569A0;
 margin-right:10px;`
const Title = styled.div`
top:50px;
 font-weight:500;
 font-size:25px;
 left:0px;
 `
const  Top = styled.div`
display:flex;
justify-content:start;
align-items:center;
width: 100%;
`
const Button = styled.div`
 margin-top:20px; 
 font-weight: 400;
 font-size: 18px;
 `
const Text = styled.div``
const Card1 = styled.div`
justify-content:center;
width:80%;
margin:50px;
`
const Main = styled.div``
const Container = styled.div`
width: 100%;
 height: 80%;
 background-color:#3569A0 ;
 display: flex;
 color:white;
flex-direction: column;
 padding: 10px;
 margin: 10px;`
