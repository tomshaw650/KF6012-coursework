/**
 *
 * AuthorsPage component, used as an element for routing
 * This page displays a table with data fetched from the API (with useApiRequest hook)
 * The user can search for a specific author by first or last name
 * The table is paginated to only show 15 results at a time
 * The user can click on a user ID to view the papers the author is associated with.
 *
 * @author Tom Shaw
 *
 */

import React, { useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import useApiRequest from "../helpers/useApiRequest";
import loadingGif from "../images/loading.gif";

import AuthorList from "../components/AuthorList";
import Header from "../components/Header";
import TitleDesc from "../components/TitleDesc";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";

export default function AuthorsPage() {
  // location to allow for modal to open on top of this page
  const location = useLocation();

  // state variables to store the search query and the current page for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");

  // custom hook to fetch data from the API, allowing for params and built in loading state
  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?search=" +
      searchTerm
  );

  // calculations to allow for pagination
  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = data.slice(firstRow, lastRow);
  const nRows = Math.ceil(data.length / rowsPerPage);

  // authorList component is passed the data and outputs a valid tablebody
  const authorList = currentRows.map((author) => (
    <AuthorList
      key={author.author_id}
      location={location}
      author_id={author.author_id}
      first_name={author.first_name}
      middle_initial={author.middle_initial}
      last_name={author.last_name}
    />
  ));

  return (
    <div className="h-full">
      {/* Header component displays main title and navigation */}
      <Header />
      <div className="flex flex-col">
        <TitleDesc
          title="Authors"
          description="(Click the author's ID to view all the papers they have worked on)"
        />
        {/* If the loading state is true, display a loading message */}
        {loading ? (
          <>
            <img
              src={loadingGif}
              alt="loading..."
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl text-white"
            />
            <span className="sr-only">Loading data...</span>
          </>
        ) : (
          <>
            {/* SearchBar component allows the user to search for a specific author */}
            <SearchBar setSearchTerm={setSearchTerm} />

            <Table
              headers={[
                "Author ID",
                "First Name",
                "Middle Initial",
                "Last Name",
              ]}
              tableBody={authorList}
            />
            <Pagination
              nRows={nRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
      <Footer />
      {/* Outlet component allows for the modal to be displayed on top of this page */}
      <Outlet />
    </div>
  );
}
