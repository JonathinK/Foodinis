import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background:${({theme}) => theme.shades._50};
  display: grid;
  grid-template-columns: minmax(2rem, 1fr) repeat(3, minmax(auto, 40em)) auto minmax(2rem,1fr);
  grid-template-rows: 1fr 1fr;
  position:sticky;
  top:0;
  left:0;
  z-index: 100;
  

/*Default Style For Logo*/
  .header_logo{
    grid-column: 2/3;
    grid-row: 1/3;
    justify-self:start;
    align-self:center;
    max-width: 120px;
  }

/*Media Queries*/
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: minmax(1.5rem, 1fr) repeat(3, 8fr) minmax(1.5rem, 1fr);
    grid-template-rows: 1fr 1fr;

  /*Default Style For Logo*/
    .header_logo{

    }
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns: minmax(1rem, 1fr) repeat(3, 1fr) minmax(1rem, 1fr);
    grid-template-rows: 1fr 1fr;

  /*Default Style For Logo*/
    .header_logo{

    }
  }
`
export const NavigationContainer = styled.nav`
  display: block;
  &.desktop{
    grid-row: 2/3;
    grid-column: 3/5;
    justify-self:end;
    align-self: center;
    padding-right: 1em;
  }
  &.mobile{
    display: none;
  }

  /*Media Queries */
    @media ${({theme}) => theme.breakpoints.tablet}{
      &.desktop{
        display: none;
      }
      &.mobile{
        display: flex;
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      
    }
`
export const NavListItems = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  
`
export const NavListItem = styled.li`
  list-style-type: none;
  font-size: 1.2em; 
  color: ${({theme}) => theme.shades._1000};
  text-decoration: none;
  text-transform: capitalize;
  span{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items:center;
    cursor:pointer;
  }
`
export const NavLink = styled(Link)`
  font-size: inherit ; 
  color: ${({theme}) => theme.shades._1000};
  text-decoration: none;
  text-transform: capitalize;
`
export const DropDownMenu = styled.div`
  position: absolute;
  display:none;
  ${NavListItem}:hover & {
    display: flex;
  }
  ${NavListItems}{
    background: ${({theme}) => theme.shades._50};
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items:flex-start;
    gap:1rem;
    padding:2em;
    border-radius: .5em;
    box-shadow: 0 .25em .25em 0em rgba(0,0,0,.33),
                0 .5em .5em 0em rgba(0,0,0,.22),
                0 1em 1em 0em rgba(0,0,0,.22),
                0 0 .5em .25em rgba(0,0,0,.22) inset;
    

    ${NavListItem} ${NavLink}{
      text-decoration: none;
      color: ${({theme}) => theme.shades._1000};  
    }
    a{
      text-decoration: none;
      color: ${({theme}) => theme.shades._1000};
      font-size: ${({theme}) => theme.font_size.body_medium};
    }
  }
`
export const Hamburger = styled.div` 
  
  @media ${({theme}) => theme.breakpoints.desktop}{
    display:none;
  }
`