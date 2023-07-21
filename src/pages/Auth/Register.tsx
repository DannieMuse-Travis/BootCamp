import React from 'react'
import styled from 'styled-components'
import SocialButton from '../../components/static/SocialButton'
import { Link } from 'react-router-dom'


const SignIns = () => {
  return (
    <div>S

<Container>
                <Main>
                    <Top>
                        {/* <Logo /> */}
                        <Title>Sign in</Title>

                        <Div>
                            <SocialButton
                                text=" Google"
                                color="#fb8585"
                                icon="G"
                            />
                            <SocialButton
                                text=" Facebook"
                                color="#579cfd"
                                icon="F"
                            />
                        </Div>

                        <br />
                        <DotLine>
                            
                            <Text>OR</Text>
                            
                        </DotLine>
                    </Top>

                    

                        <Holder>
                            <TextHolder>Email:</TextHolder>
                            <InputHolder>
                                <Input
                                    placeholder="Your Email"
                                />
                        
                            </InputHolder>
                    
                        </Holder>
                        <Holder>
                            <TextHolder>Password:</TextHolder>
                            <InputHolder>
                                <Input
                                    placeholder="Your Password"/>
                                    
                            </InputHolder>
                            
                        </Holder>


                        <Button type="submit">Sign in</Button>

                        <TextContent>

                        {/* already have an accout <span>Sign in</span> */}
                        </TextContent>
                        {/* <Signed to="/register" >Sign Up</Signed> */}
                    
                </Main>
            </Container>
    </div>
  )
}

export default SignIns

const Signed = styled(Link)`
margin-bottom: 30px;
/* color: purple; */
cursor: pointer;
font-weight: 600;
text-decoration: none;
`


const TextContent = styled.div`
font-size: 13px;
text-align: center;
margin: 10px 0;

span{
    font-weight: 700
}
`

const Button = styled.button`
outline: none;
border: 0;
background-color:#3569a0;
width: 100%;
height: 40px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 3px;
color: white;
font-size: 20px;
font-weight: 600;
`




const Input = styled.input`
outline: none;
flex: 1;
border: 0;
padding-left: 10px
`
const InputHolder = styled.div`
width: 100%;
height: 60px;
border: 1px solid silver;
border-radius: 5px;
display:flex;
align-items:center;
`

const TextHolder = styled.div`
font-size: 14px;
font-weight: 600;
margin-bottom: 3px
`

const Holder = styled.div`
width: 100%;
margin: 4px 0;

`



 const Div = styled.div`
display:flex
` 

const Text = styled.div`
margin: 0 5px;
font-size: 10px;
display:flex;
justify-content:center;
align-items:center;
`

/* const Line = styled.div`
width: 100%;
height: 1px;
background-color: silver */
/* ` */

const DotLine = styled.div`
display:flex;
width:100%;
align-items: center;
display:flex;
justify-content:center;
`

const Title = styled.div`
font-weight: 400;
font-size: 20px;
margin-top: px
`

/* const Logo = styled.div`
width: 60px;
height: 50px;
border-radius: 3px;
background-color: purple;

` */

const Top = styled.div`
margin: 4px 0;
display:flex;
align-items: center;
flex-direction: column;
width: 100%

`

const Main = styled.div`
width: 350px;
min-height: 400px;
border: 1px solid silver;
border-radius: 10px;
display:flex;
align-items: center;
flex-direction: column;
padding: 0 10px;

`

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 90vh;
/* font-family: Poppins */

`