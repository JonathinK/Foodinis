import styled from "styled-components";
import TexturedBackground from "../images/Textured_Background.jpg"
import { TextWrapper } from "./textBlock.styled";

export const HeroContainer = styled.section`
/* Base Styles */
  grid-column: 1/15;
  height: 50vh;
  position: relative;
  

/* Layout Variation Styles */
  &.text_no_image{
    grid-column: 1/15;
    grid-row: 1/2;

    background: silver;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: 30vh;
    overflow: hidden;
    position: relative;

    ${TextWrapper} {
      grid-column: 2/3;
      grid-row: 1/2;
      justify-self: center;
      align-self: center;
      position: relative;
      z-index: 3;
      color: ${({theme}) => theme.shades._50};
    }
  }
  &.text_no_image:before{
    content: '';
    position:absolute;
    height: 100%;
    width: 100%;
    background: ${({theme}) => theme.colors.primary};
    z-index:1;
    
  }
  &.text_no_image:after{
    content: '';
    position:absolute;
    height: 100%;
    width: 100%;
    background-image: url(${TexturedBackground});
    background-attachment: fixed;
    background-repeat: repeat;
    opacity: 1;
    z-index:2;
    mix-blend-mode: multiply;
  }
  &.full_width_image{
    grid-column: 1/15;
    grid-row: 1/2;
    justify-self: start;
    align-self: start;

    position: relative;
    height: auto;
    width: 100%;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;

   @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/9;
   }@media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
   }
  }
  
`

export const HeroImage = styled.div`
  
  &.full_hero_image{
    position: relative; 
    grid-column: 1/15;
    grid-row: 1/2;
    height: 40vh;

    &.full_hero_image:after{
    content:'';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.55);
  }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/10;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
    }
  }

  & > .full_width{
    position:absolute;
    width: 100%;
    height: 100%;  
  }
`
