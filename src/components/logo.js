import React from 'react';
import { LogoContainer } from '../styles/logo.styled';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { NavLink } from '../styles/header.styled';

export const Logo = ({ content }) => {
  const logoData = content[0] || null;
  console.log("Image", logoData);
  return(
    <LogoContainer className={content.externalName ||'footer_logo header_logo'}>
      <NavLink to='/'>
        <GatsbyImage
          image={getImage(logoData.asset)}
          alt={logoData.altText || ''}
          loading='eager'
          className={logoData.externalName}
        />
      </NavLink>
    </LogoContainer>
  )
}
export const LogoMediaQuery = graphql`
  fragment FooterLogo on ContentfulMedia {
    altText
    codeId
    contentful_id
    externalName
    asset {
      contentful_id
      gatsbyImageData(
        layout: CONSTRAINED
        placeholder: DOMINANT_COLOR
        quality: 100
        resizingBehavior: SCALE
        width: 300
      )
    }
  }
  fragment HeaderLogo on ContentfulMedia {
    altText
    codeId
    contentful_id
    externalName
    asset {
      contentful_id
      gatsbyImageData(
        layout: CONSTRAINED
        placeholder: DOMINANT_COLOR
        quality: 100
        resizingBehavior: SCALE
        width: 150
      )
    }
  }
`