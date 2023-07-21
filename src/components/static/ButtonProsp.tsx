import React from 'react'
import styled from 'styled-components'


 export interface Ibutton{
    color?:string;
    width?:string;
    text?:string;
}
const ButtonProsp:React.FC<Ibutton> = ({text}) => {
  return (
    <div>
        <Container 
         
        >
            {text}
        </Container>
    </div>
  )
}

export default ButtonProsp
const  Container = styled.div`
padding:5px 15px;
color:white;
background-color:#3569A0;
justify-content:center;
align-items:center;
cursor: pointer;
font-weight:200;
font-size:20px;
`