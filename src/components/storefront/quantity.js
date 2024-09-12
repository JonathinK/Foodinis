import React from 'react';
import styled from "styled-components";
import useStore from "../../context/StoreContext";
import useInput from "../../utils/useInput";
//___

const Quantity = ({ fields }) => {
  const { addVariantToCart } = useStore()
  const bind = useInput(1);

  console.log("Meta Fields: ", fields);
  return(
    <QuantityContainer>
      <label htmlFor='qty'>Quantity:</label>
      <input placeholder='1' id='qty' type='number' {...bind}/>
    </QuantityContainer>
  )
}
export default Quantity

const QuantityContainer = styled.div`

`