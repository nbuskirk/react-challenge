import React from 'react'
import { IconButton } from '@mui/material';
import { PaginationProps } from '../types/PaginationProps';
import { FirstPage, LastPage, NavigateBefore, NavigateNext } from '@mui/icons-material';

const Pagination = ({goToFirst, goToLast, goToPrev, goToNext, pageNumber, maxPage}: PaginationProps) => {
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === maxPage;
  return (
    <div>
      <IconButton onClick={goToFirst} disabled={isFirstPage} aria-label="First Page">
        <FirstPage />
      </IconButton>
      <IconButton onClick={goToPrev} disabled={isFirstPage} aria-label="Previous Page">
        <NavigateBefore />
      </IconButton>
      Page {pageNumber} of {maxPage}
      <IconButton onClick={goToNext} disabled={isLastPage} aria-label="Next Page">
        <NavigateNext />
      </IconButton>
      <IconButton onClick={goToLast} disabled={isLastPage} aria-label="Last Page">
        <LastPage />
      </IconButton>
    </div>  
  )
}

export default Pagination