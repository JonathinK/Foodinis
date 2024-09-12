import styled from "styled-components";

export const PaginationWrapper = styled.div`
  color: ${({theme}) => theme.shades._600};
  display: flex; 
  flex-flow: row nowrap;
  justify-content: center;
  align-items:center;
  gap: 1em;


  grid-column: 2/14;
  grid-row: 4/5; 
  justify-self: center;
  align-self: center;

  padding: 1em 1em;
  margin-top: 1em;

  .active{
    color: ${({theme}) => theme.colors.primary};
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 4px;
    padding: .2em .4em;
  }
  span{
    cursor: pointer;
  }
`
