/**
 *
 * TrackPage component, used as an element for routing
 * This page displays a table with data fetched from the API (with useApiRequest hook)
 * The table contains all papers related to the relevant track
 * The user can search for a specific paper by title or abstract through API fetching
 * There is a dropdown to filter papers by award status, achieved through filtering the data
 * The table is paginated to only show 15 results at a time
 * The user can click on an abstract of a paper to view the full abstract
 *
 * @author Tom Shaw
 *
 */

import React, { useState } from "react";

import { useLocation, Outlet } from "react-router-dom";

import useApiRequest from "../helpers/useApiRequest";
import loadingGif from "../images/loading.gif";

import PaperList from "../components/PaperList";
import Header from "../components/Header";
import TitleDesc from "../components/TitleDesc";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";

export default function TrackPage(props) {
  // useParams hook from react-router to get the track from the URL
  const track = props.track;
  // useLocation hook to allow for modal to open on top of this page
  const location = useLocation();

  // state variables to store the search query, the current page for pagination and the dropdown value
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectValue, setSelectValue] = useState("all");

  // custom hook to fetch data from the API, using useParams track and searchTerm state variable as a param
  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?track=" +
      track +
      "&search=" +
      searchTerm
  );

  // function to filter the data based on the dropdown value
  const selectPapers = (value) =>
    value.has_award === selectValue || selectValue === "all";

  // calculations to allow for pagination
  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = data.slice(firstRow, lastRow);
  const nRows = Math.ceil(data.filter(selectPapers).length / rowsPerPage);

  // paperList component is passed the data filtered by selectPapers function and outputs a valid tablebody
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

  // function to handle the DropDown component onChange event. if "false" exchange for null to match API
  const optionsHandler = (event) => {
    if (event === "false") {
      setSelectValue(null);
    } else {
      setSelectValue(event);
    }
  };

  // function takes the track and returns capitalised track name for the title
  function capitaliseTrack(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col">
        <TitleDesc
          title={`All ` + capitaliseTrack(track) + ` Papers`}
          description="(Click the abstract to view the full body of text)"
        />
        {/* if loading is true, display loading message, else display the table */}
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
            {/* Dropdown takes handler and select value as props, and is passed a function and state variable*/}
            <DropDown handler={optionsHandler} selectValue={selectValue} />
            {/* SearchBar takes setSearchTerm as a prop, and is passed a state variable */}
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
            {/* Pagination component applies pagination to the table */}
            <Pagination
              nRows={nRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
      {/* Footer component displays footer */}
      <Footer />
      {/* Outlet component renders the modal */}
      <Outlet />
    </div>
  );
}
