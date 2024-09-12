import React from 'react';
import styled from "styled-components"
import { GatsbyImage } from 'gatsby-plugin-image';
import ProductIcon from './productIcons';
//___

const ProductCard = ({ content, handleOpenModal }) => {
  const { title,description, featuredMedia, shopifyId } = content;
  console.log("Asset: ", content )
  return(
    <Product>
      <ProductImage>
        <GatsbyImage
          image={featuredMedia.preview.image.gatsbyImageData}
          alt={ featuredMedia.preview.altText || title }
          className="full_width"
        />
      </ProductImage>
      <ProductContent>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
      </ProductContent>
      <ProductIcon/>
      <div className='options_button_container'>
        <ProductOptionsButton onClick={() => handleOpenModal(content)}>
          View Options
        </ProductOptionsButton>
      </div>  
    </Product>
  )
}
export default ProductCard

// Styles
const Product = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: flex-start;
  gap: 1em;
  background: white;
  box-shadow: 0px 85px 24px 0px rgba(0, 0, 0, 0.00), 0px 55px 22px 0px rgba(0, 0, 0, 0.04), 0px 31px 18px 0px rgba(0, 0, 0, 0.13), 0px 14px 14px 0px rgba(0, 0, 0, 0.22), 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1em;
  overflow: hidden;
  padding: 1.5em 1.5em;
  border: .2em solid ${({theme}) => theme.shades._300};

 & > .options_button_container{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
`
const ProductImage = styled.div`
  aspect-ratio: 2/1.4;
  border-radius: 1em;
  border: .2em solid ${({theme}) => theme.shades._200};
  position: relative;
  width: 100%;
  overflow: hidden;

  .full_width{
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
const ProductContent = styled.div`
  height: 82px;
`
const ProductTitle = styled.h3`
  font-size: clamp(
  ${({theme}) => theme.font_size.heading_h6_large},
  3.5vw,
  ${({theme}) => theme.font_size.heading_h6_small}
  );
  font-weight: medium;
  line-height: ${({theme}) => theme.line_height.heading};
  color: ${({theme}) => theme.shades._900};
  padding: 0em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`
const ProductDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden; 
  font-size: 1.125em;
`
const ProductOptionsButton = styled.button`
  border: none;
  border-radius:.5em;
  background: ${({theme}) => theme.colors.primary};
  padding: 1em 1.5em;
  width: 100%;
  font-size: .8em;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`