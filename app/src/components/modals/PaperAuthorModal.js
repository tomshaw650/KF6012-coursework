/**
 *
 * PaperAuthorModal is a modal component that displays all associated authors with a specific paper
 * This leverages react-router to get the paper ID from the URL, and to display over the current page
 * This uses the useApiRequest hook to fetch the papers
 *
 * @author Tom Shaw
 *
 */

import { useNavigate, useParams } from "react-router-dom";

import useApiRequest from "../../helpers/useApiRequest";
import loadingGif from "../../images/loading.gif";

export const PaperAuthorModal = () => {
  // useNavigate hook from react-router used for button to close modal and return to previous page
  const navigate = useNavigate();

  // useParams hook from react-router used to get the paper ID from the URL
  const { paperId } = useParams();

  // useApiRequest custom hook used to fetch the authors using paper ID API parameter
  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?paper_id=" +
      paperId
  );

  // authorList uses the data from the API request to display the authors
  const authorList = data.map((author) => (
    <div key={author.author_id}>
      <ul className="list-disc italic">
        <li>
          {author.first_name} {author.middle_initial} {author.last_name},{" "}
          {author.institution}, {author.country}
        </li>
      </ul>
    </div>
  ));

  return (
    <div className="align-center absolute top-0 flex h-full w-screen justify-center bg-modal">
      <div className="flex h-fit w-80 flex-col items-start rounded-xl bg-white p-5">
        <h3 className="flex justify-center text-lg font-bold">Authors</h3>
        <p className="flex justify-center">
          The following authors worked on this paper:
        </p>
        {/* if loading is true, display loading message */}
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
          authorList
        )}
        {/* button to close modal and return to previous page */}
        <button
          className="mt-10 self-center rounded bg-orange py-2 px-4 font-bold text-white hover:bg-amber-900"
          onClick={() => navigate(-1)}
        >
          Close
        </button>
      </div>
    </div>
  );
};
