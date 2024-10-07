import React, { useContext } from 'react'
import styled from 'styled-components';
import Button,{ButtonD} from '../styled_components/Button';
import logoH from "../assets/logo.svg"
import useThemeR from '../ContextAPIs/ThemeContextR';
//---------------------------React component-------------------------------------

function Navbar() {
    let {theme,toggleTheme} = useThemeR();  
  return (
    <>
        <Wrapper>
            <div className="Nav_div">
                <LogoImg as='a' href='#' onClick={toggleTheme}><img src={logoH}></img></LogoImg>
                <Button as='a'shadow="green" bg="hsl(90.48deg 100% 75.29%)" color="hsl(120deg 100% 24%)" 
                className='nav_btn'
                href='#'
                >
                Try it free</Button>
            </div>
            {/* <Button onClick={toggleTheme}>Theme</Button> */}
        </Wrapper>
    </>
  )
}
export default Navbar

//---------------------------styled CSS------------------------------------
const Wrapper=styled.div`
    
    /* *{
        background-color: ${(props)=> props.theme.backgroundColor};
        color:${(props)=> props.theme.color}
    } */
    .Nav_div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${(props)=> props.theme.backgroundColor};
        background-image: ${props=> props.theme.bg_body_image};
        border-bottom: 3px solid pink;
        flex-wrap: wrap;
        padding: 1rem 2rem;
        gap:1rem;
    }
`;
//---------------------------styled components-----------------------------------

const light_theme={
    color: "black",
    backgroundColor: "white",
    logo_bg: "lightyellow",
    bg_image: "none"
}
const dark_theme={
    color: "white",
    backgroundColor: "#310e68",
    logo_bg: "#fcfc73",
    bg_image: "linear-gradient(316deg, #310e68 0%, #5f0f40 74%)"
}
const LogoImg=styled.div`
    padding:0.5rem;
    background-color: ${props=> props.theme.logo_bg};
    border-radius: 1rem;
    text-decoration: none;
`;