import React from 'react'
import styled from 'styled-components'
import Card from '../../components/static/Card'
import { AiOutlineMenu } from "react-icons/ai"
import {IoMdPeople} from "react-icons/io"
import {BsFillLightbulbFill} from "react-icons/bs"


const Wrapper = () => {
  return (
    <div>
        <Container>
            <Main>


                <Card
                    cardIcon={<AiOutlineMenu />}
                    title='Stay Organized'
                    cardText='Tired of losing files, notes, & audio clips? Capture and organize every idea, no matter where you are.'
                 />
                 <Card
                 cardIcon={< IoMdPeople/>}
                 title='Easy Collaboration'
                 cardText='Write together in real-time. Communicate effortlessly with integrated comments, text chat, and video chat.'/>
                 <Card
                 cardIcon={<BsFillLightbulbFill/>}
                 title='Endless Ideas'
                 cardText='Songcraft suggests keys, chords, and progressions. For lyrics, you’ll love our rhyming dictionaries and thesaurus.'
                 />
             
            </Main>
        </Container>
    </div>
  )
}

export default Wrapper

const Main = styled.div`
margin-left:70px;
display:flex;
/* justify-content:center; */
/* justify-content:space-between;/ */
`
const Container = styled.div`
background-color:#3569A0;
height:50vh;
width:100%;
overflow:hidden;
`