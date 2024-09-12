import styled from "styled-components";
import BlogSvg from "../images/Textured_Background.png";
//___

export const FeatureImage = styled.div`
  grid-column: 5/11;
  grid-row: 3/5; 
  position:relative;
  z-index: 1;
  margin: 2em 0em;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0px 94px 26px 0px rgba(0, 0, 0, 0.00), 0px 60px 24px 0px rgba(0, 0, 0, 0.03), 0px 34px 20px 0px rgba(0, 0, 0, 0.12), 0px 15px 15px 0px rgba(0, 0, 0, 0.20), 0px 4px 8px 0px rgba(0, 0, 0, 0.23);
  img{
    border-radius: 1em;
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 2/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 2/6;
  }

`
export const BlogTitle = styled.div`
  grid-column: 5/11;
  grid-row: 5/6;

  & > .primary_color{
    color: ${({theme}) => theme.colors.primary};
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:2/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
  }
`
export const Author = styled.div`
  grid-column: 5/11;
  grid-row: 2/3;
  align-self: center;
  justify-self: center;
  margin-top: 2em;

  display: flex;
  flex-flow: column-reverse nowrap;
  justify-content: center;
  align-items: center;
  gap: .5em;
  position:  relative;
  z-index: 2;
  

  .author_image{
    background: ${({theme}) => theme.shades._50};
    border-radius: 50%;
    border: 2px solid ${({theme}) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items:center;
    max-width: 80px;
    aspect-ratio: 1/1;

    img{
      width: 100%;
    }
  }
  .author_name{
    font-size: 1rem;
    font-weight: 600;
    color: ${({theme}) => theme.shades._50};
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:2/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6 ;
  }
`
export const DateContainer = styled.div`
  grid-column: 5/11;
  grid-row: 6/7;
  display:flex; 
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: baseline;
  gap: .5em;
  padding: 1em 0em;

  .posted_text{
    font-size: 1rem;
    font-weight: 600;
  }
  .blog_date{
    font-size: 1rem;
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 2/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 2/6;
  }
`
export const TagRelationsContainer = styled.div`
  grid-column: 5/11;
  grid-row: 8/9;
  border-top: 1px solid black;
  padding: 1em 0em;
  margin-bottom: 2em;

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 2/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 2/6;
  }
`
export const ShareContainer = styled.div`
`
export const BlogVector = styled.div`
  grid-column: 1/15;
  grid-row: 2/4; 
  width: 100%;
  position: relative;
  z-index: 0; 

  &.vector_background{
    background-color: ${({theme}) => theme.colors.primary};
    background-image: url(${BlogSvg});
    background-blend-mode: multiply;
    background-attachment: fixed;
    
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/11;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
  }
`