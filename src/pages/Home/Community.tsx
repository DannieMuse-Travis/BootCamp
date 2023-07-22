import React from 'react'
import styled from 'styled-components'

const Community = () => {
  return (
    <div>
          <Container>
            <Main>
                <Card>
                    <BigText>Songcraft Syndicate</BigText>
                    <SmallText>A blog for songwriters and musicians</SmallText>
                   
                    
                </Card>
            </Main>
        </Container>
    </div>
  )
}

export default Community


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