import styled, { useTheme } from "styled-components";
import {ThemeProvider} from "styled-components";
import React, { useState, createContext, useContext } from 'react';
import Button from "../styled_components/Button";
import useThemeR from "../ContextAPIs/ThemeContextR";


function Themes() {
    let {theme,toggleTheme} = useThemeR();
    console.log(toggleTheme)
  return (
    <Button onClick={toggleTheme}>Theme change</Button>
  )
}

export default Themes;

    

