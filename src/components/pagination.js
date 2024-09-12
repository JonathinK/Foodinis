import React from 'react';
import { PaginationWrapper } from '../styles/pagination.styled';


//Pagination Return
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  //Logic
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  //Keyboard Listener
    const handleKeyDown = (e, page) => {
      if (e.key === 'Enter' || e.key === ''){
        onPageChange(page);
      }
    };
  //Pagination Components

  return(
    <PaginationWrapper>
   
      <span
        className="page-item"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        role='button'
        tabIndex={"0"}
        onKeyDown={(e) => handleKeyDown(e, currentPage - 1)}
        aria-disabled={currentPage === 1}      
      >
        &lt;
      </span>
   
      {pages.map((page, id) => (
        <span
          className={`page-item ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
          role='button'
          tabIndex={"0"}
          onKeyDown={(event) => handleKeyDown(event, page)}
          key={id}
        >
          {page}
        </span>
      ))}
    
      <span 
        className="page-item"
        onClick= {() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        role='button'
        tabIndex={"0"}
        onKeyDown={(e) => handleKeyDown(e, currentPage + 1)}
        aria-disabled={currentPage === totalPages}  
      >
        &gt;
      </span>
    </PaginationWrapper>
  )
}
export default Pagination