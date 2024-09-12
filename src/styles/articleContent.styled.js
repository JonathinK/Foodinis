import styled from "styled-components";
//___

//_ The article content will only be for article content. All of the raw styles for the typography will be styled in here and only specific to this style sheet. I did this because I ran into way too many issues using styled components with it's wrapper feature. _//

export const ArticleContent = styled.article`
/* Base Styles */
  display: flex; 
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
/* Typography Styles */

/* Grid Placement for Article Component */
  &.policies{
      grid-column: 4/12;
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  }
  &.blog_template_article{
      grid-column: 5/11; 
      grid-row: 7/8;

      @media ${({theme}) => theme.breakpoints.tablet}{
        grid-column: 2/9;
      }
      @media ${({theme}) => theme.breakpoints.mobile}{
        grid-column: 2/6;
      }
  }
`