import { Icon } from '@iconify-icon/react/dist/iconify.js';
import React from 'react';
import { IconWrapper } from '../../styles/icons.styled';
const NutritionIconSelector = ({ tag }) => {
    const tagSelector = tag || '';
    switch(tagSelector) { 
      case 'GlutenFree_':
        return <Icon icon="mdi:gluten-free" />;
      case 'HealthyChoice_':
        return <Icon icon="icon-park-solid:healthy-recognition" />;
      case 'Vegan_':
        return <Icon icon="iconoir:vegan-circle" />;
      case 'VeganPossible_':
        return;
      case 'Vegitarian_':
        return <Icon icon="fa6-solid:carrot" />;
      case 'CustomerFavorite_':
        return <Icon icon="mdi:account-favorite" />;
      case 'Beef_':
        return <Icon icon="lucide:beef" />;
      case 'Poultry_':
        return <Icon icon="f7:poultry-leg" />;
      case 'Seafood_':
        return <Icon icon="mdi:fish" />;
      default:
        return null;
    }
  }
const ProductIcon = ({ tag }) => {
  const icon = NutritionIconSelector({ tag });
  if(!icon) return null;

  return(
    <IconWrapper className='icon_wrapper'>
      {icon}
    </IconWrapper>
  )
};

export default ProductIcon