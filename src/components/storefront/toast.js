import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//___

const Toast = ({ message, show, onHide }) => {
  const [isVisible, setIsVisible] = useState(show); // Local state to manage visibility

  useEffect(() => {
    if (show) {
      setIsVisible(true); // Show the toast

      const hideToast = setTimeout(() => {
        setIsVisible(false); // Trigger the slide out
        setTimeout(onHide, 300); // Wait for the slide-out transition before hiding completely
      }, 2000); // Show for 1 seconds

      return () => clearTimeout(hideToast);
    }
  }, [show, onHide]);

  if (!show) return null;
  return(
    <ToastContainer show={isVisible}>
        <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  )
}
export default Toast

const ToastContainer = styled.div.attrs(({show}) => ({
  style: {
    transform: show ? 'translateX(0)' : 'translateX(100%)',
  }
}))`
  display: flex; 
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;

  position: fixed;
  top: 8em;
  right: 0;
  z-index: 103;

  background: ${({theme}) => theme.shades._50};
  border-radius: .5em 0em 0em .5em;
  box-shadow: 4px 4px 8px rgba(0,0,0,.33);
  transition: transform .3s ease;
`
const ToastMessage = styled.span`
  font-size: 1rem; 
  color: black;
`