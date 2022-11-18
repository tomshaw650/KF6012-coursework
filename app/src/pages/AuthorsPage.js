import React, { useEffect, useState } from "react";

import NavBar from "../components/navigation/NavBar";
import Header from "../components/Header";
import MobileNavBar from "../components/navigation/MobileNavBar";
import Spinner from "../components/Spinner";
import Table from "../components/Table";
import Pagination from "../components/navigation/Pagination";
import Footer from "../components/Footer";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    fetch(
      "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author"
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setAuthors(json.data);
      });
  }, []);

  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = authors.slice(firstRow, lastRow);
  const nRows = Math.ceil(authors.length / rowsPerPage);

  const authorList = currentRows.map((author) => (
    <tr className="hover:bg-gray-600" key={author.author_id}>
      <td className="text-center text-lg">{author.first_name}</td>
      <td className="text-center text-lg">{author.middle_initial}</td>
      <td className="text-center text-lg">{author.last_name}</td>
    </tr>
  ));

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-between bg-bgdark">
        <Header />
        <NavBar />
        <MobileNavBar />
      </div>
      <div className="flex flex-col">
        <h1 className="mt-2 flex justify-center text-3xl text-white">
          Authors
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Table
              headers={["First Name", "Middle Initial", "Last Name"]}
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
    </div>
  );
}
