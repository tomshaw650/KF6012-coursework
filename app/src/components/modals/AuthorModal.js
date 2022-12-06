/**
 *
 * AuthorModal is a modal component that displays all associated papers with a specific author
 * This leverages react-router to get the author ID from the URL, and to display over the current page
 * This uses the useApiRequest hook to fetch the papers
 *
 * @author Tom Shaw
 *
 */

import { useNavigate, useParams } from "react-router-dom";

import useApiRequest from "../../helpers/useApiRequest";
import loadingGif from "../../images/loading.gif";

export const AuthorModal = () => {
  // useNavigate hook from react-router used for button to close modal and return to previous page
  const navigate = useNavigate();
  // useParams hook from react-router used to get the author ID from the URL
  const { authorId } = useParams();

  // useApiRequest custom hook used to fetch the papers using author ID API parameter
  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?author_id=" +
      authorId
  );

  // paperList uses the data from the API request to display the papers
  const paperList = data.map((paper) => (
    <div key={paper.paper_id}>
      <ul className="list-disc italic">
        <li>{paper.title}</li>
      </ul>
    </div>
  ));

  return (
    <div className="align-center absolute top-0 flex h-full w-screen justify-center bg-modal">
      <div className="flex h-fit w-80 flex-col items-start rounded-xl bg-white p-5">
        <h3 className="flex justify-center text-lg font-bold">Papers</h3>
        <p className="flex justify-center">This author has worked on: </p>
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
          paperList
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
