import React, { useState } from "react";
import Card from "../components/Card";
import { data } from "../assets/data";

const Explore = () => {
  const sneakers = data.sneakers;
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = sneakers
    .filter(
      (s) =>
        s.retail_price_cents !== null &&
        s.story_html !== null &&
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((item) => ({ ...item, qty: 1 }));

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="p-10 md:p-20">
      {/* Search bar with animation and uniform color */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 w-full max-w-md border border-gray-500 rounded bg-gray-100 text-black focus:outline-none focus:border-gray-700 dark:bg-gray-800 dark:border-white dark:text-white transition-all duration-300 ease-in-out transform focus:scale-105"
        />
      </div>

      {/* Centering the product cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {paginatedItems.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} />
        ))}
      </div>

      {/* Pagination with styled buttons */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-500 text-white rounded disabled:opacity-50 transition-colors duration-200 hover:bg-gray-700"
        >
          {"<<"} First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-500 text-white rounded disabled:opacity-50 transition-colors duration-200 hover:bg-gray-700"
        >
          {"<"} Previous
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-3 py-1 rounded transition-colors duration-200 ${
              pageNumber === currentPage
                ? "bg-gray-700 text-white"
                : "bg-gray-500 text-white hover:bg-gray-700"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-500 text-white rounded disabled:opacity-50 transition-colors duration-200 hover:bg-gray-700"
        >
          Next {">"}
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-500 text-white rounded disabled:opacity-50 transition-colors duration-200 hover:bg-gray-700"
        >
          Last {">>"}
        </button>
      </div>
    </div>
  );
};

export default Explore;
