import React, { useEffect, useState } from "react";

import NavBar from "../components/navigation/NavBar";
import Header from "../components/Header";
import MobileNavBar from "../components/navigation/MobileNavBar";

export default function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const authorList = authors.map((author) => (
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
          <p>Loading...</p>
        ) : (
          // center the table on the page
          <div className="flex justify-center">
            <table className="mt-5 w-4/5 rounded-2xl text-white">
              <thead className="bg-black">
                <tr>
                  <th className="p-4 text-center text-xl font-bold">
                    First Name
                  </th>
                  <th className="p-4 text-center text-xl font-bold">
                    Middle Name
                  </th>
                  <th className="p-4 text-center text-xl font-bold">
                    Last Name
                  </th>
                </tr>
              </thead>
              <tbody>{authorList}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
