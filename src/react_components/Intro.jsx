import styled from 'styled-components';
import React from 'react'
import Button from '../styled_components/Button';
import Mockups from "../assets/illustration-mockups.svg"

function Intro() {
  return (
    <StyledGrid>
      <IntroTitle>Build The Community Your Fans Will Love</IntroTitle>
      <IntroText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa laboriosam nobis, fugit quaerat et explicabo fuga. Consequuntur rem excepturi laudantium dolore recusandae nobis corrupti expedita aspernatur in eligendi, sequi commodi!</IntroText>
      <Button shadow="brown" className='introbtn'>Get Started For Free</Button>
      <IntroImg src={Mockups}></IntroImg>
    </StyledGrid>
  )
}

export default Intro
//-------------------styled components
const StyledGrid = styled.div`
    display: grid;
    background-color: ${props=> props.theme.backgroundColor};
    background-image: ${props=> props.theme.bg_body_image};
    grid-template-columns: repeat(auto-fit,minmax(5rem,1fr));
    .introbtn{
        grid-area: btn;
    }
    place-items:center;
    grid-gap: 1.2rem;
    padding-inline: 1rem;
    padding-block: 2rem;
    grid-template-areas: 
    "title  sideimg"
    "text  sideimg"
    "btn  sideimg"
    ;
    @media (max-width:725px){
    grid-template-areas: 
    "title "
    "text  "
    "btn  "
    "sideimg"
    ;
    }
`;
export const IntroTitle = styled.div`
    font-size:2rem;
    font-weight: bold;
    color : ${props => props.theme.color}  ;
    grid-area: title;
`;
export const IntroText = styled.div`
    color : ${props => props.theme.color}  ;
    grid-area: text;
`;
export const IntroImg = styled.img`
    max-width:100%;
    max-height: 100%;
    grid-area: sideimg;
    object-fit: cover;
`;