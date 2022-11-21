import React, { useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

import useApiRequest from "../helpers/useApiRequest";

import AuthorList from "../components/AuthorList";
import Header from "../components/Header";
import TitleDesc from "../components/TitleDesc";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";

export default function AuthorsPage() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?search=" +
      searchTerm
  );

  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = data.slice(firstRow, lastRow);
  const nRows = Math.ceil(data.length / rowsPerPage);

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
      <Header />
      <div className="flex flex-col">
        <TitleDesc
          title="Authors"
          description="(Click the author's ID to view all the papers they have worked on)"
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
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
      <Outlet />
    </div>
  );
}
