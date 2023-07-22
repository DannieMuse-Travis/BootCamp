import React from "react";
import styled from "styled-components";
import CreativeButton from "../../components/static/CreativeButton";
import { AiFillBell } from "react-icons/ai";

const DashHeader = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>Creative Write</Logo>
          <NavHolder>
            <Nav>Library</Nav>
            <Nav>Community</Nav>
            <CreativeButton cc='#1d8bdb' title='Upgrade to Pro' bgs="white"/>
            <AiFillBell size={20} style={{marginLeft: '20px'}}/>
          </NavHolder>
        </Main>
      </Container>
    </div>
  );
};

export default DashHeader;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-right: 50px;
  margin-bottom: 15px;
`;
const NavHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
`;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin-top: 10px;
  right: 40px;
  margin-left: 10px;
  text-decoration: none;
`;
const Main = styled.div`
  /* background-color:red; */
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: #1d8bdb;
  color: white;
  justify-content: center;
  display: flex;
  font-size: 14px;
`;
