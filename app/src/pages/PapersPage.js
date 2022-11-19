import React, { useEffect, useState } from "react";
import "../index.css";

import { Outlet, useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import NavBar from "../components/navigation/NavBar";
import Header from "../components/Header";
import Td from "../components/Td";
import MobileNavBar from "../components/navigation/MobileNavBar";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";
import ConfigIcon from "../helpers/configIcon";

export default function PapersPage() {
  const location = useLocation();
  const [paper, setPaper] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(15);

  useEffect(() => {
    fetch("http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPaper(json.data);
      });
  }, []);

  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = paper.slice(firstRow, lastRow);
  const nRows = Math.ceil(paper.length / rowsPerPage);

  const paperList = currentRows.map((paper) => (
    <tr className="hover:bg-gray-600" key={paper.paper_id}>
      <td className="text-center text-lg">{paper.paper_id}</td>
      <td className="text-center text-lg">{paper.title}</td>
      <td className="translate-x-1/2">
        {paper.has_award === null ? (
          <p></p>
        ) : (
          <ConfigIcon>
            <FaCheck />
          </ConfigIcon>
        )}
      </td>
      <Td
        to={`view/${paper.paper_id}`}
        state={{ background: location }}
        className="text-center text-lg"
      >
        {paper.abstract.length > 10
          ? paper.abstract.substring(0, 10) + "..."
          : paper.abstract}
      </Td>
      <td className="text-center text-lg">{paper.track_key}</td>
      <td className="text-center text-lg">{paper.track_name}</td>
    </tr>
  ));

  return (
    <div className="h-screen">
      <div className="flex justify-between bg-bgdark">
        <Header />
        <NavBar />
        <MobileNavBar />
      </div>
      <div className="flex flex-col">
        <h1 className="mt-2 flex justify-center text-3xl text-white">
          All Papers
        </h1>
        <h2 className="text-md mt-2 flex justify-center italic text-white">
          (Click the abstract to view the full body of text)
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
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
