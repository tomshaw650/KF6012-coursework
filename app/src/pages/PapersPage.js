import React, { useState } from "react";

import { useLocation, Outlet } from "react-router-dom";

import useApiRequest from "../helpers/useApiRequest";

import PaperList from "../components/PaperList";
import Header from "../components/Header";
import TitleDesc from "../components/TitleDesc";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";

export default function PapersPage() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectValue, setSelectValue] = useState("all");

  const { loading, paper } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?search=" +
      searchTerm
  );

  const selectPapers = (value) =>
    value.has_award === selectValue || selectValue === "all";

  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = paper.slice(firstRow, lastRow);
  const nRows = Math.ceil(paper.filter(selectPapers).length / rowsPerPage);

  const paperList = currentRows
    .filter(selectPapers)
    .map((paper) => (
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

  const optionsHandler = (event) => {
    if (event === "false") {
      setSelectValue(null);
    } else {
      setSelectValue(event);
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col">
        <TitleDesc
          title="All Papers"
          description="(Click the abstract to view the full body of text)"
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <DropDown handler={optionsHandler} selectValue={selectValue} />
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
