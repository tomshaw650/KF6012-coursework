/**
 *
 * AdminModal is a modal for authenticated account to update award status of paper
 * Leverages a JWT token as a bearer token for POST requests
 * Data auto updates on the page when award status is updated
 *
 * @author Tom Shaw
 *
 */

import { useNavigate, useParams } from "react-router-dom";
import UpdateAward from "../UpdateAward";

import useApiRequest from "../../helpers/useApiRequest";
import loadingGif from "../../images/loading.gif";

export const AdminModal = () => {
  // useNavigate hook from react-router used for button to close modal and return to previous page
  const navigate = useNavigate();

  // useParams hook from react-router used to get the paper ID from the URL
  const { paperId } = useParams();

  // useApiRequest custom hook used to fetch the abstract using paper ID API parameter
  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?paper_id=" +
      paperId
  );

  // adminList uses the data from the API request to display a dropdown to update award status
  const adminList = data.map((paper) => (
    <div key={paper.paper_id}>
      <h3 className="flex justify-center text-lg font-bold px-16">{paper.title}</h3>
      <UpdateAward paperId={paperId} award={paper.has_award} />
    </div>
  ));

  return (
    <div className="align-center absolute top-0 flex min-h-full w-screen justify-center bg-modal">
      <div className="flex h-fit flex-col items-start rounded-xl bg-white p-5">
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
          adminList
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
