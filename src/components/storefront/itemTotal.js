import React from 'react';
import styled from 'styled-components';
//___
const ItemTotal = () => {
  return(
    <ItemTotalContainer className="product_header">

    </ItemTotalContainer>
  )
}
export default ItemTotal

const ItemTotalContainer = styled.div`

  &.product_header{
    grid-row: 1/3;
    grid-column: 3/4; 
    background: orange;
  }
`