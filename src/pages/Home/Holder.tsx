import React from 'react'
import styled from 'styled-components'
import People from '../../components/static/People'
import wavy from "../../assets/wave.svg"

const Holder = () => {
  return (
    <div>

        <Container>
            <Main>
         <Top>
      <Bigtext>Trusted by over 80,000 songwriters</Bigtext>

      <SmallText>From beginner to professional, songwriters are taking their music to<br/> the next level with Songcraft.</SmallText>
 </Top>
<br/>
 <Down>
     <People
     title='"I adore Songcraft and use it constantly! I use it with my songwriting students and co-writers, and as a way to demonstrate the songwriting process in my YouTube videos."'
     Text='April Keez
     '
     Atext='Songwriter & Educator'
     />
     <People
     title='"Songcraft is the most comprehensive tool for teaching songwriting. Everything you need to write, record, and manage songs is built into a simple and easy-to-learn system."
     '
     Text='Jason Brennan
     '
     Atext='School of Rock'
     />

     <People
     title='"Songcraft is a songwriting guitarists dream! Along with lyrics, Songcraft has built in tuner, bpm and tablature settings. I always recommend this to my co-writers and students."'

    
     Text='Mike Meiers
     '
     Atext='Songwriting for Guitar'
     />
     
     <People
     title='"Songcraft is a songwriting guitarists dream! Along with lyrics, Songcraft has built in tuner, bpm and tablature settings. I always recommend this to my co-writers and students."'

    
     Text='Mike Meiers
     '
     Atext='Songwriting for Guitar'
     />
     
     <People
     title='"Songcraft is a songwriting guitarists dream! Along with lyrics, Songcraft has built in tuner, bpm and tablature settings. I always recommend this to my co-writers and students."'

    
     Text='Mike Meiers
     '
     Atext='Songwriting for Guitar'
     />
     
     <People
     title='"Songcraft is a songwriting guitarists dream! Along with lyrics, Songcraft has built in tuner, bpm and tablature settings. I always recommend this to my co-writers and students."'

    
     Text='Mike Meiers
     '
     Atext='Songwriting for Guitar'
     />
     
     


 </Down>
 
            </Main>
        </Container>
        <Img src={wavy}/>

    </div>
  )
}

export default Holder
const Img = styled.img`
background-color:white;
margin-top: -20px;
`
const Down = styled.div`
margin:10px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
flex-direction: row;
width: 100%;



`
const SmallText = styled.div`
text-align: center;
font-weight:200;
font-size: 20px;
`
const Bigtext = styled.div`
font-weight:700;
font-size:30px;`
const Top = styled.div`
flex-direction:column;
flex-wrap:wrap;
justify-content:center;
align-items: center;
display:flex;
width: 100%;
`
const Main = styled.div`
padding:5 5px;
width: 90%;
`
const Container = styled.div`
background-color:#F7F5EF;
width:100%;
min-height:90vh;
padding-top: 50px;
display:flex;
justify-content: center;
align-items: center;
`