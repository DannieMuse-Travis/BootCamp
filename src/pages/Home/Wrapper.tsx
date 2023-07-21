import React from 'react'
import styled from 'styled-components'

const Wrapper = () => {
  return (
    <div>
        <Container>
            <Main>
              Travis
            </Main>
        </Container>
    </div>
  )
}

export default Wrapper

const Main = styled.div``
const Container = styled.div`
background-color:#3569A0;
height:90%;
width:100%;
display:flex;
top:0;`