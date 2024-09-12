import { Link } from 'gatsby';
import styled from 'styled-components';

export const Card = styled.div`
  
  &.blog_card{
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: 1fr;
  }
  &.product_card{
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
  }
`
export const CardTitle = styled.p`
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
export const CardLink= styled(Link)`
  text-decoration: none;
`
export const CardBody = styled.div`
  
  display: flex;
  flex-flow: column;
  justify-content:flex-start;
  align-items: flex-start;
  gap: .5em;
  padding: 1.5rem;
  line-height: ${({theme}) => theme.line_height.body};
  color: ${({theme}) => theme.shades._800};

  &.blog_card_body{
      grid-column: 1/2;
      grid-row: 1/2;
      justify-self: center;
      align-self: start;
      position: relative;
      z-index: 2;
      margin: 60% 2em 0em 2em;
      width: 90%;
      border-radius: 1em;
      border: 1px solid lightgrey;
      background: ${({theme}) => theme.shades._50};
  }
  &.product_card_body{
    padding: 0em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`
export const CardImage = styled.div`
  border-radius: 1em;
  overflow: hidden;
  width: 100%;

  &.blog_card_image{
    grid-column: 1/2;
    grid-row: 1/2;
    position: relative;
    justify-self:center;
    align-self: start;
  }

  &.product_image{
    aspect-ratio: 2/1.4;
    border-radius: 1em;
    border: .2em solid ${({theme}) => theme.shades._200};
    position: relative;

    .full_width{
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`
export const CardLabel = styled.label`
`
export const Price = styled.div`

`