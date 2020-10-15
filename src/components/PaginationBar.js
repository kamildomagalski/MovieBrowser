import React from 'react';
import {Pagination} from "react-bootstrap";

function PaginationBar({pages, nextPage, currentPage}) {
  
  const paginationItems = [];
  
  for (let i = 1; i < pages; i++) {
    paginationItems.push(
      <Pagination.Item key={i} active={i === currentPage}>{ i }</Pagination.Item>
    )
  }
  
  console.log(currentPage);
  
  return (
  <Pagination>
    <Pagination.Prev onClick={()=>nextPage(currentPage - 1)}/>
    {paginationItems}
    <Pagination.Next onClick={()=>nextPage(currentPage + 1)}/>
  </Pagination>
  );
}

export default PaginationBar;