import styled from "styled-components";
//___

export const ProductSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items:flex-start;
  gap: 1em;
  position:relative;
  width: 100%;
  margin: 2em 0em;
  grid-column: 2/14;
  grid-row: auto;
  h2{
    font-size: 1.5em;
    padding: 1em 0em;
    border-bottom: 2px solid grey;    
  }
`
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 456px));
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: 2rem;
  margin-bottom: 2rem;
 
  width: 100%;

  @media ${({theme}) => theme.breakpoints.tablet}{
  grid-column: 2/8;
  }@media ${({theme}) => theme.breakpoints.mobile}{
  grid-column: 2/6;
  }
`