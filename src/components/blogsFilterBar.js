import React from 'react';
import { Filter, FilterBar, Sort } from '../styles/filter.styled';
//___
//___Components
 const FilterComponent = ({tags,selectedTag,onTagChange}) => (
  
  <Filter>
    <label htmlFor='tagFilter'>Filter: </label>
    <select 
      id="tagFilter" 
      value={selectedTag} 
      onChange={(e) => onTagChange(e.target.value)}
    >
      <option value="">All</option>
      {tags.map(tag => (
        <option key={tag.contentful_id} value={tag.externalName}>
          {tag.externalName}
        </option>
      ))}
    </select>
  </Filter>
 )
 const SortBy = ({ sortCriteria, onSortChange}) => (
  <Sort>
    <label htmlFor='sortBy'>Sort by: </label>
    <select 
      id="sortBy" 
      value={sortCriteria} 
      onChange={(e) => onSortChange(e.target.value)}
    >  
      <option value="date-desc">Date (Newest First)</option>
      <option value="date-asc">Date (Oldest First)</option>
    </select>
  </Sort>
 )
export const BlogsFilterBar = ({ tags, selectedTags, onTagChange, sortCriteria, onSortChange }) => {
  console.log("Tags: ", tags)
  return(
   <FilterBar className='blogs_filter'>
      <FilterComponent
        tags={tags}
        selectedTags={selectedTags}
        onTagChange={onTagChange}
      />
      <SortBy
        sortCriteria={sortCriteria}
        onSortChange={onSortChange}
      />
   </FilterBar>
  )
}