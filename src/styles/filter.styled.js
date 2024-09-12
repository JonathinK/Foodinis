import styled from "styled-components";

export const FilterBar = styled.div`
  display: flex;
  position: relative;

  &.blogs_filter{
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    grid-column: 2/14;
    grid-row: 2/3;
    margin: 2em 0em;
    padding: .5em 0em;  
    border-bottom: 1px solid ${({theme}) => theme.shades._500};
  }
  &.products_filter{
    border-bottom: none;
    border-radius: 1em;
    background: ${({theme}) => theme.shades._100};
    padding: 2em 4em;
    grid-row: 3/4;
    grid-column: 2/14;
    margin: 2em 0em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 4em;

    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  }
`
export const Filter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap:1em;
`
export const Sort = styled(Filter)`
`
export const FilterButton = styled.div`
  border: none;
  background: none;
  
  .product_selector_title{
    font-size: 1em;
    cursor: pointer;
  }
`
