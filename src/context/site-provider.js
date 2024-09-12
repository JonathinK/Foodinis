import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { lightTheme } from '../themes/site-theme';
import { StoreProvider } from "./StoreContext";
import "../fonts/fonts.css";
/*-------------------------------------------------------*/

export const SiteProvider = ({ element }) => {
  return(
      <ThemeProvider theme={lightTheme}>
        <StoreProvider>
           <GlobalStyle /> 
          {element}
        </StoreProvider>
      </ThemeProvider>
  )
}