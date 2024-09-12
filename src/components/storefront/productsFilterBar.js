import React, {useState} from 'react';
import { FilterBar, FilterButton } from '../../styles/filter.styled';
import { MainHeading } from '../../styles/typography';
//___


const ProductsFilterBar = ({ collections, onSelectCollection }) => {
  const [selectedCollection, setSelectedCollection] = useState(collections[0].handle);

  const handleClick = (handle) => {
    setSelectedCollection(handle);
    onSelectCollection(handle);
  };

  return(
    <FilterBar className='products_filter'>
      {collections.map(collection => (
        <FilterButton 
          className="product_selector_title"
          key={collection.handle}
          onClick={() => handleClick(collection.handle)}
          active={selectedCollection === collection.handle}
        >
          <MainHeading className="product_selector_title">
            {collection.title}
          </MainHeading>
        </FilterButton>
      ))}
    </FilterBar>
  )


}
export default ProductsFilterBar