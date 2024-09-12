import React from 'react';
import styled from "styled-components";
import PrimaryButton from './primaryButton';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import useStore from '../../context/StoreContext';
import ProductRow from './productRow';
//___

const Cart = ({onClose, isOpen}) => {
  const { cart, checkout } = useStore()

  return(
    <CartBackground onClick={onClose} isOpen={isOpen}>
      <CartSlideDeck isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <DeckHeader>
          <DeckHeaderTitle>Your Order</DeckHeaderTitle>
          <Close onClick={onClose}>
            <Icon icon="ion:close" />
          </Close>
        </DeckHeader>
        <ProductRows>
        {
          cart.length > 0 ? cart.map((item, index) => <ProductRow key={index} item={item} />) : <Text>Your cart is empty.</Text>
        }
        </ProductRows>
          <PrimaryButton 
            wrapperStyle="cart"
            text="Checkout"
            onClick={() => window.open(checkout.webUrl)} disabled={cart.length === 0}
          />    
      </CartSlideDeck>
    </CartBackground>
  )
}
export default Cart

const CartBackground = styled.div.attrs(({isOpen}) => ({
  style: {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateX(0)":"translateX(100%)",
    transition: isOpen ? "all 1s ease-in-out" : "none",
  }
  }))`
  position: fixed;
  z-index: 101;
  right:0;
  top:0;
  right: 0;
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 1em 0em;
  transition: all .5s ease;

  &:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to left,
      ${({theme}) => theme.colors.secondary} 30%,
      transparent 
    );
  }
`
const CartSlideDeck = styled.div.attrs(({isOpen}) => ({
  style: {
    transform: isOpen ? "translateX(0)":"translateX(100%)",
    transition: isOpen ? "all .5s ease .5s" : "none",
  }
  }))`
  position: relative;
  z-index: 102;
  right:0;
  height: 100%;
  width: 100%;
  max-width: 700px;
  background: ${({theme}) => theme.shades._50};
  
  border-radius: 1em 0em 0em 1em;
  overflow: hidden;
  padding-bottom: 2em;

  display: grid;
  grid-template-columns: 2em 1fr 2em; 
  grid-template-rows: auto 1fr auto;
  gap: 2em 1em;
`
const DeckHeader = styled.div`
  grid-row: 1/2;
  grid-column: 1/4;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  gap: 1em;
  border-bottom: 2px solid grey;
`
const Text = styled.p`

`
const DeckHeaderTitle = styled.span`
  font-size: 1.6rem;
`
const Close = styled.div`
  display: flex;
  font-size: 1.5em;
  cursor: pointer;
`
const ProductRows = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1em;
`
