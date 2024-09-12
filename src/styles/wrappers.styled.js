import styled from "styled-components";
//___


//__Wrappers
//_ The way the wrappers will work is based on whether it is a grid or a flex. _//

//Grid Wrapper
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({theme}) => theme.layouts.desktop};
  grid-auto-rows: auto;
  position: relative;

  &.blogs_render{
    grid-column: 2/14;
    grid-row: 3/4;

    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-auto-rows: auto;
    grid-auto-flow: row;
    gap: 2rem 2rem;
    
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  }

  &.products_grid{
    grid-row: 4/5;
    grid-column: 2/14;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-auto-rows: auto;
    grid-auto-flow: row;
    gap: 2rem;
    margin-bottom: 2rem;

    @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 2/8;
   }@media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 2/6;
   }
  }
`
//Flex Wrapper
export const FlexWrapper = styled.div`
  display: flex;
  position: relative;

  &.product_page_rewards_cta{
    grid-row: 2/3;
    grid-column: 1/15;
    padding: 1em 2em;
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.shades._50};
  }

  &.centered{
    justify-content: center;
    align-items:center;
  }
  &.product_card_flex{
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  &.product_icon_flex{
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items:flex-end;
    gap: 1em;
  }
`



