import React from 'react';
import styled from "styled-components";
import { IconWrapper } from '../../styles/icons.styled';
import { Icon } from '@iconify-icon/react/dist/iconify.js';
//___

const PrimaryButton = ({onClick, buttonStyle, wrapperStyle, text, hasIcon, disabled}) => {
  return(
    <PrimaryButtonWrapper onClick={onClick} className={wrapperStyle}>
      <Button className={buttonStyle} disabled={disabled}>
        <ButtonText>{text}</ButtonText>
        {hasIcon ? 
          <IconWrapper>
            <Icon icon="ion:bag-add-sharp" />
          </IconWrapper> 
        : null}
      </Button>
    </PrimaryButtonWrapper>
  )
}

export default PrimaryButton

const PrimaryButtonWrapper = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;
  width: 100%;

  &.cart{
    grid-column: 2/3;
    grid-row: 3/4;
  }
`
const Button = styled.button`
  border: none;
  border-radius: .5em;
  background: ${({theme}) => theme.colors.success};
  width: 100%;
  padding: 2em 2em;
  font-weight: 600;
  font-size: 1em;
  display: flex; 
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 1em;
  cursor: pointer;

  &:disabled{
    background: ${({theme}) => theme.shades._300};
    cursor: not-allowed;
    opacity: .5;
    & p{
      color: ${({theme}) => theme.shades._800};
    }
  }
  
`
const ButtonText = styled.p`
  font-weight: 600;
  font-size: 1em;
  line-height: 110%;
  color: ${({theme}) => theme.shades._50};
  display: flex;
`