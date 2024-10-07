import React from 'react'
import { IntroImg,IntroText,IntroTitle } from './Intro'
import ImageCard1 from "../assets/illustration-grow-together.svg"
import styled from 'styled-components'

function Body_card_Right({url}) {
  return (
    <BodyCard>
        <IntroTitle>Grow Together</IntroTitle>
        <IntroText className='bodytext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas beatae expedita aspernatur laborum inventore minus laboriosam deserunt debitis dolorum.</IntroText>
        <div className='imageC' style={{height:"100%"}}>
        <IntroImg src={url}></IntroImg>
        </div>
    </BodyCard>
  )
}

export default Body_card_Right
//--------------------------------------
const BodyCard=styled.div`
    display: grid;
    max-height: 50vh;

    background-color: ${props=> props.theme.bg_image};
    background-image: ${props=> props.theme.bg_body_image};
    /* grid-template-columns: repeat(auto-fit,minmax(5rem,1fr)); */
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2,1fr);
    padding: 1rem;
    place-items:center;
    grid-gap: 1.2rem;
    padding-inline: 1rem;
    padding-block: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 1rem gray;
    margin: clamp(0.8rem,1rem + 3vw,2rem);
    grid-template-areas: 
    "IC title"
    "IC text"
    ;
    @media (max-width:520px){
    grid-template-columns: 1fr ;
    grid-template-areas: 
    "title "
    "text  "
    "IC"
    ;
    max-height: 80vh;
    }
    @media (min-width:991px){
      margin-inline:6rem;
    }
    .bodytext{
        align-self: self-start;
    }
    .imageC{
        grid-area: IC;
    }
`;