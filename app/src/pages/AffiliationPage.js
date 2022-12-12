/**
 *
 *
 *
 * @author Tom Shaw
 *
 */

import React, { useState } from "react";

import useApiRequest from "../helpers/useApiRequest";
import loadingGif from "../images/loading.gif";

import Header from "../components/Header";
import TitleDesc from "../components/TitleDesc";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";

export default function AffiliationPage() {
  // state variables to store the search query and the current page for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");

  // custom hook to fetch data from the API, allowing for params and built in loading state
  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/affiliation?search=" +
      searchTerm
  );

  // calculations to allow for pagination
  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = data.slice(firstRow, lastRow);
  const nRows = Math.ceil(data.length / rowsPerPage);

  // affiliationList is passed the data and outputs a valid tablebody
  const affiliationList = currentRows.map((author) => (
    <tr className="hover:bg-gray-600" key={author.author_id}>
      <td className="text-center text-lg">{author.first_name}</td>
      <td className="text-center text-lg">{author.middle_initial}</td>
      <td className="text-center text-lg">{author.last_name}</td>
      <td className="text-center text-lg">{author.country}</td>
      <td className="text-center text-lg">{author.institution}</td>
      <td className="text-center text-lg">{author.department}</td>
    </tr>
  ));

  return (
    <div className="h-full">
      {/* Header component displays main title and navigation */}
      <Header />
      <div className="flex flex-col">
        <TitleDesc
          title="Authors"
          description="(View each author's affiliations)"
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
                "First Name",
                "Middle Initial",
                "Last Name",
                "Country",
                "Institution",
                "Department",
              ]}
              tableBody={affiliationList}
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
    </div>
  );
}
