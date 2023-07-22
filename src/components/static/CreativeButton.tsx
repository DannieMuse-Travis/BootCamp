import React from 'react'
import styled from 'styled-components'

interface iCreative{
    cc: string
    bgs: string
    title: string
}

const CreativeButton:React.FC<iCreative> = ({cc, bgs, title}) => {
  return (
    <div>
        <Container>
            <Main  bgs={bgs} cc={cc}>
                {title}
            </Main>
        </Container>
    </div>
  )
}

export default CreativeButton

const Container = styled.div`
display: flex;

`
const Main = styled.div<{bgs?: string, cc?: string}>`
padding: 8px 20px;
border-radius: 5px;
background-color: ${({bgs})=>bgs};
color: ${({cc})=>cc};
`