import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import useStore from '../../context/StoreContext';
//___

const ProductRow = ({item}) => {
  const { removeLineItem } = useStore();
  const {product} = item;

  return(
    <ItemContainer>
      <ItemDetails>
        <ItemTitle>{product.title}</ItemTitle>
      </ItemDetails>
      <RemoveItem onClick={() => removeLineItem(product.variants[0]?.shopifyId)}>Remove Item</RemoveItem>
    </ItemContainer>
  )
}
export default ProductRow

const ItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
  background: orange;
  padding: 1em .5em;
  border-left: 4px solid grey; 
  width: 100%;
`
const ItemDetails = styled.div`
  flex: 4;
`
const ItemTitle = styled.p`
  font-size: 1.5em;
`
const RemoveItem = styled.button`
  color: red;
  background: none;
  border: none;
  cursor:pointer;
  flex: 1;
`
