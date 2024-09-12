import styled from "styled-components";
import { NavLink } from "./header.styled";
import VeggieImage from "../images/VeggieImage.png";

export const Footer = styled.footer`
  background: ${({theme}) => theme.shades._50};
  display: grid;
  grid-template-columns: ${({theme}) => theme.layouts.desktop};
  grid-auto-rows: repeat(4,auto);
  padding-top: 2em;
  
  .footer_logo{
    grid-column: 2/3;
    grid-row: 1/2;
  }
`
export const FooterBackground = styled.div`
  height: 200px;
  background-image: url(${VeggieImage});
  background-attachment: scroll;
  background-position: center;
  background-repeat: repeat;
  background-size: auto;
  background-blend-mode: multiply;
  opacity: .5;
  grid-row: 5/6;
  grid-column: 1/15;
  position: relative;
  z-index: 1;

  &:after{
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${({theme}) => theme.shades._50} 20%,
      transparent
    );
  } 
`
export const FollowUs = styled.div`
  grid-row: 1/2;
  grid-column: 12/14;
  justify-self: end;
  align-self: center;
  font-size: 2em;
  .instagram{
    color: ${({theme}) => theme.colors.primary};
  }
`
export const FooterLinks = styled.div` 
  grid-row: 2/3;
  grid-column: 8/14;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  padding: 1em 0em;
  

  ${NavLink}{
    
  }
`
export const PolicyLinks = styled(FooterLinks)`
  grid-row: 3/4;
  grid-column: 1/15;
  background: ${({theme}) => theme.colors.secondary};
  padding: .5em;
  justify-content: center;

  ${NavLink}{
    color: ${({theme}) => theme.shades._50};
    font-weight: 300;
    font-size: clamp(
      .8em,
      3.5vw,
      .6em
    );
    transition: font-weight .5s ease-in-out;
  } ${NavLink}:hover{
      font-weight: bold;
    }
`
export const BottomBar = styled.div` 
  grid-row: 4/5;
  grid-column: 2/14;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  padding: 1em 0em;

  .powered{
    display: inherit;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 1em;
    max-width: 288px;
    width: 100%;
    .powered_icons{
      display: inherit;
      justify-content: center;
      align-items:flex-start;
      gap: 1em;
      font-size: 1.2em;
    }
  }
  .copyright{
    display: inherit;
    justify-content: center;
    align-items:center;
    width: 100%;
  }
  .designed{
    max-width: 288px;
    width:100%;
    display: inherit;
    justify-content: flex-end;
    align-items: center;
  }
`
