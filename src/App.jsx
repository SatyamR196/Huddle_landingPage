import React,{ useState,useContext,createContext } from 'react'
import Navbar from './react_components/Navbar'
import './App.css'
import {ThemeProvider} from 'styled-components';
import Themes from './react_components/Themes'
import useThemeR from "./ContextAPIs/ThemeContextR";
import Intro from './react_components/Intro'
import Body_card from './react_components/Body_card'
import ImageCard1 from "./assets/illustration-grow-together.svg"
import FlowingImg from "./assets/illustration-flowing-conversation.svg"
import UserImg from "./assets/illustration-your-users.svg"
import styled from 'styled-components';
import GlobalStyle from "./Global_Style"
import Body_card_Right from './react_components/Body_Card_Right';

function App() {
  let {theme} = useThemeR();
  return (<>

      <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Navbar/>
          <Intro/>
          <Body_card url={ImageCard1} title="Grow Together" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas beatae expedita aspernatur laborum inventore minus laboriosam deserunt debitis dolorum."/>
          <Body_card_Right url={FlowingImg} title="Flowing Conversations" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas beatae expedita aspernatur laborum inventore minus laboriosam deserunt debitis dolorum."/>
          <Body_card url={UserImg} title="Your Users" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas beatae expedita aspernatur laborum inventore minus laboriosam deserunt debitis dolorum."/>
          <h1>Hello world</h1>
          <Themes/>
      </ThemeProvider>

      </>
  )
}

export default App
