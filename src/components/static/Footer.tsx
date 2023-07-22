import React from "react";
import styled from "styled-components";
import wavy from "../../assets/waves.svg";
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai"

const Footer = () => {
  const footer = [
    {
      title: "The Basics",
      subtitle: [{ name: "Terms of Service" }, { name: "Privacy Policy" }],
    },
    {
      title: "Learn More",
      subtitle: [
        { name: "Community" },
        { name: "Organization, Educators, etc." },
        { name: "Partner with Us" },
      ],
    },
    {
      title: "News and Resources",
      subtitle: [
        { name: "All Resources" },
        { name: "Getting Started" },
        { name: "Collaboration & Sharing" },
        { name: "Tab Builder" },
        { name: "Songwriting Exercises" },
      ],
    },
    {
      title: "Contact Us",
      subtitle: [
        { name: "Email support@songcraft.io" },
        { name: "Chat with Us" },
      ],
    },
  ];

  return (
    <div>
      <Imgs src={wavy} />
      <Container>
        <Main>
          <First>
            {footer.map((props: any) => {
              return (
                <Box>
                  <HeadText>{props.title}</HeadText>
                  {props.subtitle.map((el: any)=>{
                    return(<SubText>{el.name}</SubText>)
                  })}
                </Box>
              );
            })}
          </First>
          <Last>
            <SubText> © Songcraft LLC </SubText>
            <IconHolder>
              <Icon1/>
              <Icon2/>
              <Icon3/>
            </IconHolder>
          </Last>
        </Main>
      </Container>
    </div>
  );
};

const Icon1 = styled(AiFillFacebook)`
cursor: pointer;
`
const Icon2 = styled(AiOutlineTwitter)`
cursor: pointer;
`
const Icon3 = styled(AiOutlineInstagram)`
cursor: pointer;
`

const Imgs = styled.img`
  transform: rotate(180deg);
  margin-bottom: -50px;
`;

const Container = styled.div`
  min-height: 300px;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #3569a0;
`;
const IconHolder = styled.div`
font-size: 35px;
width: 12%;
display: flex;
justify-content: space-between;
`
const Icon = styled.div``
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
`;
const First = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
z-index: 4;
`;
const Box = styled.div`

`;
const HeadText = styled.div`
font-size: 22px;
font-weight: 700;
`;
const SubText = styled.div`
font-size: 16px;
margin: 15px 0px;
transition: all 499ms;
cursor: pointer;
:hover{
  text-decoration: underline;
}
`;
const Last = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
`;

export default Footer;
