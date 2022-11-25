/**
 *
 * Pagination component for navigation between fetched table results.
 * Creates a 'Next' and 'Previous' button to navigate between pages.
 * Displays the current page and amount of pages
 *
 * @params nRows - the number of rows in the table
 * @params currentPage - the current page of the table
 * @params setCurrentPage - function to set the current page of the table
 *
 * @author Tom Shaw, Kunal Nalawade
 *
 */

import React from "react";

const Pagination = ({ nRows, currentPage, setCurrentPage }) => {
  // this sets the text to 'Page x of y' where x is the current page and y is the total number of pages
  const pageDisplay = `Page ${currentPage} of ${nRows}`;

  // function to handle the 'Next' button click. Only sets page if the current page is less than the total number of pages
  const nextPage = () => {
    if (currentPage !== nRows) setCurrentPage(currentPage + 1);
  };

  // function to handle the 'Previous' button click. Only sets page if the current page is not 1
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="mt-5">
      <ul className="flex justify-center">
        <li className="p-2">
          {/* Previous button */}
          <button
            //hover darkens the button's colour
            className="rounded bg-orange py-2 px-4 font-bold text-white hover:bg-amber-900"
            onClick={prevPage}
          >
            Previous
          </button>
        </li>
        {/* Displays the current page and total number of pages */}
        <span className="mt-2 rounded px-6 pt-2 text-center font-bold text-white">
          {pageDisplay}
        </span>
        <li className="p-2">
          {/* Next button */}
          <button
            //hover darkens the button's colour
            className="hover:bg- rounded bg-blue py-2 px-4 font-bold text-white hover:bg-sky-900"
            onClick={nextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
