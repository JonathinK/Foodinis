import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items:  center;
  position: fixed;
  z-index: 101;
  background: rgba(0,0,0,.5);
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
`
export const Modal = styled.div`
  display: flex;
  flex-flow:row nowrap;
  justify-content: start;
  align-items:space-between;
  gap: 3em;  
  position: relative;
  z-index: 102;
  height: 80vh;
  max-width: 1500px;
  width: 100%;
  background: ${({theme}) => theme.shades._50};
  border-radius: 1em 1em 0em 0em;
  padding: 3em 3em 0em 3em;
  overflow-y: auto;
`
export const ModalFeatureImage = styled.div`
  aspect-ratio: 3/2;
  border-radius: 1em;
  flex: 1;
  position: sticky;
  top: 0;
  height: fit-content;
  overflow: hidden;


  & .image_fit{
      position: absolute;
      height: 100%;
      width: 100%;
  }
`
export const ScrollBlock = styled.form`
  flex: 1;
  height: 100%;
  overflow-y:scroll;
  padding-bottom: 2em;
`
export const ProductTitle = styled.span`
  font-size: clamp(
    1.5rem,
    3.5vw,
    3rem
  );
`
export const NutritionIcons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items:center;
  gap: 0em 1em;
  padding: 1em 0em;
  width: fit-content;
  
  & > .icon_wrapper{
    background: 
  }
`
export const Description = styled.div`
  padding: 1em 0em;
`
export const LineSeparation = styled.hr`
  border: none;
  background: ${({theme}) => theme.shades._500};
 &.thick{
    height: 4px;
    border-radius: 1em;
  }
 &.thin{
    height: 2px;
    border-radius: 1em;
  }
`
export const CloseButton = styled.div`  
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center; 
  padding: 1em;
  border-radius: 50%;
  background: ${({theme}) => theme.shades._50};
  width:fit-content;
  height: auto;
  cursor: pointer;
  position: fixed;
  top: 18%;
  left: 14%;
  border: 2px solid ${({theme}) => theme.shades._600};

  & > .modal_close_button{
    font-size: 1.2em;
    color: ${({theme}) => theme.shades._800};
  }
`