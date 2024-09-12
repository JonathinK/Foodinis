import React from 'react';
import styled from "styled-components";
import { GatsbyImage } from 'gatsby-plugin-image';
import ItemTotal from './itemTotal';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
import PrimaryButton from './primaryButton';
import NutritionIcons from './nutritionIcons';
import Quantity from './quantity';
import useStore from '../../context/StoreContext';
import useInput from '../../utils/useInput';
//---

const ProductModal = ({ isOpen, onClose, product, onAddToCart }) => {
  // Call hooks at the top level of the component
  const { addVariantToCart } = useStore();
  const bind = useInput(1);
  
  if(!isOpen || !product) return null;

  const {title,description,featuredMedia,tags,metafields} = product

  console.log("Product Modal: ", product );

  const handleAddToCart = () => {
    if (product.variants && product.variants.length > 0) {
      addVariantToCart(product, bind.value);
      onAddToCart(title);
      onClose();
    } else {
      console.error("No variants found for this product.");
    }
  };

  return( 
    <ModalBackground isOpen={isOpen} onClick={onClose}>
      <ProductDrawSlide onClick={(e) => e.stopPropagation()}>
        <DrawHeader>
          <Close onClick={onClose}>
            <Icon icon="ion:close" />
          </Close>
          <Title>{title}</Title>
          <ItemTotal/>
          <ProductDetails>

          </ProductDetails>
        </DrawHeader>
        <ProductImage>
          <GatsbyImage
            image={featuredMedia.preview.image.gatsbyImageData}
            alt={featuredMedia.preview.image.altText || title}
            className='full_width'
          />
        </ProductImage>
        <ModalScroll>
          <NutritionIcons tags={tags}/>
          <Description>{description}</Description>
          <Options>
            <Quantity fields={metafields}/>
          </Options>
        </ModalScroll>
        <PrimaryButton
          text="Add To Cart"
          hasIcon={false}
          onClick={handleAddToCart}
        />
      </ProductDrawSlide>
    </ModalBackground>
  )
}
export default ProductModal

const ModalBackground = styled.div.attrs(({isOpen}) => ({
  style: {

  }
  }))`
  position:fixed;
  z-index: 101;
  top:0;
  left:0;
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0em;

  &:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      ${({theme}) => theme.colors.secondary} 50%,
      transparent
    );
  }
`
const ProductDrawSlide = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  position: relative;
  background: ${({theme}) => theme.shades._50};
   
  border-radius: 0em 1em 1em 0em;
  overflow: hidden;

  display: grid;
  grid-template-columns: 2em 1fr 1fr 2em; 
  grid-template-rows: auto 1fr auto;
  gap: 2em 1em; 
  padding-bottom: 2em;
`
const DrawHeader = styled.div`
  grid-row: 1/2;
  grid-column: 1/5;
  display: grid;
  grid-template-columns: 100px  auto 100px;
  grid-template-rows: auto 50px;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  max-height: 200px;
  position:relative;
`
const ProductDetails = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  background: blue;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items:center;
`
const Close = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  background: red;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5em; 
  padding: 1em 0em; 
  cursor: pointer;
`
const Title = styled.span`
  background: teal;
  grid-row: 1/2;
  grid-column: 2/3;
`
const Description = styled.p`
  font-size: 1em;
`
const ProductImage = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  border-radius: .5em;
  overflow:hidden;
  aspect-ratio: 2/1.4;
  width: 100%;
  position: relative;
  
  & .full_width{
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
const ModalScroll = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  background: grey;
  justify-self: start;
  align-self: center;
  height: 100%;
  width: 100%;
  border-radius: .5em;
  padding: 1em;
  
`
const Options = styled.form`

`