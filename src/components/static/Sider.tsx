import React from 'react'
import styled from 'styled-components'

const Sider = () => {
  return (
    <div>
        <Container>
            <Main>
      All songs
            </Main>
        </Container>
    </div>
  )
}

export default Sider

const Container = styled.div`
height: calc(100vh - 80px);
width: 250px;
background-color: whitesmoke;
`
const Main = styled.div`
display:flex;
justify-content:center;
align-items:center;
`