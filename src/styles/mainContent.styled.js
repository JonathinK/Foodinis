import styled from "styled-components";
import Paper from "../images/Paper_Background.png";
//___

//__Main Content
//_Main Content is in between the header and the footer representing the main content of the page. Sections, asides, and articles will all be inside the main content._//

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: ${({theme}) => theme.layouts.desktop};
  grid-template-rows: auto;

  
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: ${({theme}) => theme.layouts.tablet};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns: ${({theme}) => theme.layouts.mobile};
  }

  &.blog_template_main{
    background-color: ${({theme})=> theme.shades._100};
    background-image: url(${Paper});
    background-repeat: repeat;
    background-blend-mode: multiply;
  }

  &.products_main{
    background-color: ${({theme})=> theme.shades._50};
    position: relative;
  }

  &.products_main:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${Paper});
    background-repeat: repeat;
    background-blend-mode: multiply;
    opacity: .5;
    z-index:0;
  }
`