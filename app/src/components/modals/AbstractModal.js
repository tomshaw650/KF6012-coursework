/**
 *
 * AbstractModal is a modal component that is used to display a modal
 * The modal displays abstract based on the paper ID
 * This leverages react-router to get the author ID from the URL, and to display over the current page
 * This uses the useApiRequest hook to fetch the abstract
 *
 * @author Tom Shaw
 *
 */

import { useNavigate, useParams } from "react-router-dom";

import useApiRequest from "../../helpers/useApiRequest";

export const AbstractModal = () => {
  // useNavigate hook from react-router used for button to close modal and return to previous page
  const navigate = useNavigate();
  // useParams hook from react-router used to get the paper ID from the URL
  const { paperId } = useParams();

  // useApiRequest custom hook used to fetch the abstract using paper ID API parameter
  const { loading, data } = useApiRequest(
    "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?paper_id=" +
      paperId
  );

  // abstractList uses the data from the API request to display the abstract
  const abstractList = data.map((paper) => (
    <div key={paper.paper_id}>
      <h3 className="flex justify-center text-lg font-bold">{paper.title}</h3>
      <p>{paper.abstract}</p>
    </div>
  ));

  return (
    <div className="align-center absolute top-0 flex min-h-full w-screen justify-center bg-modal">
      <div className="flex h-fit w-4/5 flex-col rounded-xl bg-white p-5">
        {/* if loading is true, display loading message */}
        {loading ? <p>Loading...</p> : abstractList}
        {/* button to close modal and return to previous page */}
        <button
          className="mt-10 rounded bg-orange py-2 px-4 font-bold text-white hover:bg-amber-900"
          onClick={() => navigate(-1)}
        >
          Close
        </button>
      </div>
    </div>
  );
};
