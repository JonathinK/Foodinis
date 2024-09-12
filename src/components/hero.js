import React from 'react';
import { HeroContainer, HeroImage } from '../styles/hero.styled';
import TextBlock from './textBlock';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { TextWrapper } from '../styles/textBlock.styled';

// Hero Type Components
const TypeOne = ({ content }) => (
  <TextWrapper className="type_one_text">
    <TextBlock content={content.content[0]}/>
  </TextWrapper>
  
);

const TypeTwo = ({ content }) => (
 <>
  <HeroImage className="full_hero_image">
    <GatsbyImage
      image={getImage(content.content[0].content[0].asset)}
      className={content.content[0].content[0].externalName}
      alt=''
    />
  </HeroImage>
  <TextWrapper className="type_two_text">
    <TextBlock content={content.content[0]}/>
  </TextWrapper>
 </>
);

const TypeThree = () => (
  <div>
    <h1>Hello</h1>
  </div>
);

const TypeFour = () => (
  <div>
    <h1>Hello</h1>
  </div>
);

// Create a mapping of codeId to components
const heroComponentMap = {
  text_no_image: TypeOne,
  full_width_image: TypeTwo,
  third_type: TypeThree,
  fourth_type: TypeFour,
  // Add more mappings here
};

const Hero = ({ content, heroClass }) => {
  // Data Variables
  const heroType = content.heroType;
  const HeroComponent = heroComponentMap[heroType] || null;

  console.log("Content: ", content); // Debugging log for content
  console.log("Hero Type: ", heroType); // Debugging log for heroType
  console.log("Hero Component: ", HeroComponent); // Debugging log for HeroComponent

  // Component Return
  return (
    <HeroContainer className={heroClass ? heroClass :''}>
      {HeroComponent ? <HeroComponent content={content} /> : <p>No matching component found for {heroType}</p>}
    </HeroContainer>
  );
};

export default Hero;