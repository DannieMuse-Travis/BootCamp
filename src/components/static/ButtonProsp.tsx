import React from 'react'
import styled from 'styled-components'


 export interface Ibutton{
    color?:string;
    padding?:string;
    text?:string;
}
const ButtonProsp:React.FC<Ibutton> = ({text,padding}) => {
  return (
    <div>
        <Container pd={padding}
         
        >
            {text}
        </Container>
    </div>
  )
}

export default ButtonProsp
const  Container = styled.div<{pd?: string}>`
padding:${({pd})=>pd};
color:white;
border-radius:5px;
display: flex;
background-color:#3569A0;
justify-content:center;
align-items:center;
cursor: pointer;
font-weight:400;
font-size:15px;
`