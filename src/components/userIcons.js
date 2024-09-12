import React from 'react';
import styled from "styled-components";
import { Icon } from '@iconify-icon/react/dist/iconify.js';
//___

const UserIcons = ({ cartItemCount, onCartIconClick, className, isCart,isUser, isSearch }) => {
  // State

  return(
    <UserIconWrapper className={className}>
      {isCart && (
        <UserIcon className="cart_icon" onClick={onCartIconClick}>
          <Icon icon="dashicons:cart" />
          {cartItemCount > 0 && <CartCount><CartCountNumber>{cartItemCount}</CartCountNumber></CartCount>}
        </UserIcon>
      )}
      {isUser && (
        <UserIcon className="user_icon" onClick={() => console.log("Don't forget to add my functionality")}>
         <Icon icon="mdi:user" />
        </UserIcon>
      )}
      {isSearch && (
        <UserIcon className="search_icon" onClick={() => console.log("Search Icon Is Clickable")}>
          <Icon icon="ic:round-search" />
        </UserIcon>
      )}
    </UserIconWrapper>
  )
}
export default UserIcons

const UserIconWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

  &.header_user_icons{
    grid-row: 2/3;
    grid-column: 5/6;
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: flex-end;
    align-items: center;
    gap: .5em;
    border-left: 2px solid ${({theme}) => theme.shades._500};
    color: ${({theme}) => theme.shades._800}; 
    padding: .25em .5em;
    margin: 1em 0em;

    @media ${({theme}) => theme.breakpoints.tablet}{
      .user_icon,
      .search_icon{
        display: none;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      .user_icon,
      .search_icon{
        display: none;
      }
    }
  }
  &.mobile_user_icons{
    @media ${({theme}) => theme.breakpoints.desktop}{
      display: none;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      
    }
  }
`
const UserIcon = styled.div`
  display: flex;
  font-size: 1.8em;
  position: relative;

  @media ${({theme}) => theme.breakpoints.hover}{
    :hover{
      cursor: pointer;
    }
  }
`
const CartCount = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 100;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  width: 24px;
  border-radius: 1em;
  
  background: ${({theme}) => theme.colors.primary};
`
const CartCountNumber = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: white;
`