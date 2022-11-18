// original author Kunal Nalawade

import React from "react";

const Pagination = ({ nRows, currentPage, setCurrentPage, props }) => {
  //display 'Page x of y'
  const pageDisplay = `Page ${currentPage} of ${nRows}`;

  const nextPage = () => {
    if (currentPage !== nRows) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="mt-2">
      <ul className="flex justify-center">
        <li className="p-2">
          <button
            className="rounded bg-orange py-2 px-4 font-bold text-white"
            onClick={prevPage}
          >
            Previous
          </button>
        </li>
        <span className="mt-2 rounded px-6 pt-2 text-center font-bold text-white">
          {pageDisplay}
        </span>
        <li className="p-2">
          <button
            //hover increases size of button animated
            className="hover:bg- rounded bg-blue py-2 px-4 font-bold text-white"
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
