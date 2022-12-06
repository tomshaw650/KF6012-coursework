import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";

import useApiRequest from "../helpers/useApiRequest";

import Header from "../components/Header";
import TitleDesc from "../components/TitleDesc";
import AdminList from "../components/AdminList";
import DropDown from "../components/DropDown";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";

export default function UpdatePage(props) {
  const location = useLocation();
  // state variables to store the search query, the current page for pagination and the dropdown value
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectValue, setSelectValue] = useState("all");

  // custom hook to fetch data from the API, using searchTerm state variable as a param
  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?search=" +
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
  const adminList = currentRows
    .filter(selectPapers)
    .map((paper) => (
      <AdminList
        key={paper.paper_id}
        paper_id={paper.paper_id}
        title={paper.title}
        location={location}
        has_award={paper.has_award}
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

  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col">
        {/* TitleDesc component displays title and description */}
        <TitleDesc
          title="Admin"
          description="(Click the award icon to edit the status)"
        />
        <input
          type="button"
          className="my-4 w-32 self-center rounded-lg bg-red p-5 text-center text-xl text-white hover:bg-rose-900"
          value="Sign out"
          onClick={props.handleSignOut}
        />
        {/* if loading is true, display loading message */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* DropDown component takes a handler and select value prop to display the dropdown */}
            <DropDown handler={optionsHandler} selectValue={selectValue} />
            {/* SearchBar component takes a setSearchTerm prop which is passed a state variable */}
            <SearchBar setSearchTerm={setSearchTerm} />
            {/* Table component takes a tableBody prop which is passed the paperList component */}
            <Table
              headers={["Paper ID", "Title", "Award Status"]}
              tableBody={adminList}
            />
            {/* Pagination component applies pagination to the results */}
            <Pagination
              nRows={nRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
        {/* Footer component displays footer */}
      </div>
      <Footer />
      <Outlet />
    </div>
  );
}
