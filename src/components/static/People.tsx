import React from "react";
import styled from "styled-components";
interface cardProps {
  title: string;
  Text: string;
  Atext:string;
}
const People: React.FC<cardProps> = ({ title, Text,Atext }) => {
  return (
    <div>
      <Container>
        <Main>
          <Card>
            {title}
            {/* "I adore Songcraft and use it constantly! I use it with my songwriting students and co-writers, and as a way to demonstrate the songwriting process in my YouTube videos." */}
          </Card>
          
          <Sec> <b>{Text}</b> {" . "} {Atext}</Sec>
        </Main>
      </Container>
    </div>
  );
};

export default People;
const Sec = styled.div`
width: 100%;
margin-top:12px;
display:flex;
justify-content:center;
`;
const Card = styled.div`


  
`;
const Main = styled.div`
  padding:50px;
 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Container = styled.div`
  width:380px;
  background-color:white;
  display: flex;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-bottom:20px;

  color: black;
`;
