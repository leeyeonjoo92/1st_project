import React from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";

// components
import MainItemList from "./MainItemList";
import Pagination from "../Components/sw/Pagination";

const Section = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <MainItemList category={category} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Section;
