import React from "react";
import styled from "styled-components";
import CreativeButton from "../../components/static/CreativeButton";

const DashBoard = () => {
  return (
    <div>
      <Container>
        <Main>
            <BigText>
               AllSong
               
            </BigText>  
            <CreativeButton cc='white' title='New Song' bgs="#1d8bdb"/>
            <SmallText>
     
            <Wrapper>
    Name 
     </Wrapper>
     
            </SmallText>
        </Main>
      </Container>
    </div>
  );
};

export default DashBoard;
const Wrapper = styled.div`
width:100%;
height:150px;
`
const SmallText = styled.div`
    border-bottom:1px solid black;
`
const Container = styled.div`
width:calc(100vw - 256px);
height: 100%;
background-color:white;
display:flex;
justify-content:center;
`
const Main = styled.div`
display:flex;
width:100%;
margin-top:40px;

`
const BigText = styled.div`
font-weight:500;
font-size:30px;
flex: 1;
`
const Ind = styled.div``