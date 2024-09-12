import styled from "styled-components";

export const BlockFlex = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
  margin-top: 2em;
  padding: 1.5em 1.5em;

  .title_block{
    display: flex;
    flex-flow: inherit;
    justify-content: flex-start;
    align-items: flex-start;
    gap: .25em;
  }
  &.before_you_go_block{
    padding: 2em 1.5em;
    border: 1px solid ${({theme}) => theme.shades._100};
    border-radius: 1em;
  }
`
export const BlockTitle = styled.span`
   font-size: 1.5em;
`
export const BlockHelperText =  styled.span`
`
export const Options = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: .5em;
  width: 100%;
`
export const Option = styled.div`
  display: flex;

  &.checkbox_option{
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: .5em;
    width: 100%;
    padding: 1em 1em;
    border-radius: .5em;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.4s ease;

     .option_inside_wrapper{
      display: inherit;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;
      position: relative;

      .option_image_wrapper{
        border-radius: .5em;
        overflow: hidden;
        border: ${props => props.checked ? '2px solid white' : '2px solid white'};
        box-shadow: ${props => props.checked ? ' 4px 4px 4px rgba(0,0,0,.3), -4px -4px 4px rgba(255,255,255,.3)' : 'none'};
        transition: all 0.3s ease;
      }
    }
  }
  &.checkbox_option:before{
    content: '';
    width: ${props => props.checked ? '100%' : '0%'};
    height: 100%;
    right:0;
    top:0;
    position: absolute;
    background-image: linear-gradient(to left, ${({theme}) => theme.colors.secondary} 20%, ${({theme}) => theme.colors.primary});
    transition: all 0.4s ease;
  }
  &.before_you_go_option{
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    .option_inside_wrapper{
      display: inherit;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;

      .option_image_wrapper{
        border-radius: .5em;
        overflow: hidden;
      }
    }
  }
  
`
export const ButtonOption = styled.button`
  background: ${props => props.selected ? 'black' : 'transparent'};
  color: ${props => props.selected ? 'white' : 'black'};
  padding: 1em 2em;
  border-radius: .5em;
  border: ${props => props.selected ? '1px solid white' : '1px solid black'};
  cursor: pointer;
  transition: all 0.3s ease;
`
export const OptionInput = styled.input`
  
  &.radio{
    display: none;
  }
  &.hidden_checkbox{
    display: none;
  }
`
export const OptionLabel = styled.label`
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;

  &.hide_textarea_label{
    display: none;
  }
  &.checkbox_selected{
    color: ${props => props.checked ? props.theme.shades._50 : 'black'};
    transition: color 0.3s ease .1s;
  }
  &.no_cursor{
    cursor: default;
  }
`
export const CustomerRequestInput = styled.textarea`
  height: 300px;
  width: 100%;
  resize: none;
  padding: 1em;
`
export const WarningLabel = styled.span`
  color: ${({theme}) => theme.colors.warning};
  font-size: .8rem; 
  font-weight: bold;
`;

//Quantity Styles
export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  position:relative;
  z-index: 2;
`;
export const QuantityButton = styled.button`
  background: ${({theme}) => theme.colors.secondary};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center;
  aspect-ratio: 1/1;
  width: 2em;
  border-radius: .25em;
  border: 0;
  position: relative;
  z-index: 2;
  cursor: pointer;

  &.add:before{
    content: '';
    background: white;
    border-radius: 1em;
    height: .25em;
    width: 1em;
    position: absolute;
    z-index: 3;
  }
  &.add:after{
    content: '';
    background: white;
    border-radius: 1em;
    height: .25em;
    width: 1em;
    position: absolute;
    z-index: 3;
    rotate: 90deg;
  }
  &.subtract:before{
    content: '';
    background: white;
    border-radius: 1em;
    height: .25em;
    width: 1em;
    position: absolute;
    z-index: 3;
  }
`;
export const QuantityInput = styled.input`
  width: 40px;
  text-align: center;
  font-size: 1em;
  margin: 0 0.5em;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
export const FinalPrice = styled.div`
  display: inherit;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: .5em;
  width: 100%;
  position: relative;
  z-index: 2;

  .final_price_title{
    font-size: 1em; 
  }
  .final_price_number{
    font-size: 1em;
    display: flex; 
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: .5em;
    background: white;
    border-radius: .5em;
  }
`;

// Add to cart button
export const AddToCartButton = styled.button`
  background: 
`