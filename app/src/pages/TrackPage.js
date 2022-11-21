import React, { useState } from "react";

import { useParams, useLocation, Outlet } from "react-router-dom";

import useApiRequest from "../helpers/useApiRequest";

import PaperList from "../components/PaperList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";

export default function TrackPage() {
  const { track } = useParams();

  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, paper } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?track=" +
      track +
      "&search=" +
      searchTerm
  );

  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = paper.slice(firstRow, lastRow);
  const nRows = Math.ceil(paper.length / rowsPerPage);

  const paperList = currentRows.map((paper) => (
    <PaperList
      key={paper.paper_id}
      paper_id={paper.paper_id}
      title={paper.title}
      has_award={paper.has_award}
      location={location}
      abstract={paper.abstract}
      track_key={paper.track_key}
      track_name={paper.track_name}
    />
  ));

  function capitaliseTrack(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col">
        <h1 className="mt-2 flex justify-center text-3xl text-white">
          All {capitaliseTrack(track)} Papers
        </h1>
        <h2 className="text-md mt-2 flex justify-center italic text-white">
          (Click the abstract to view the full body of text)
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <Table
              headers={[
                "Paper ID",
                "Title",
                "Award Status",
                "Abstract",
                "Track Short Name",
                "Track Full Name",
              ]}
              tableBody={paperList}
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
