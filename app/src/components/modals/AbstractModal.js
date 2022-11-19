import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const AbstractModal = () => {
  const navigate = useNavigate();
  const { paperId } = useParams();

  const [paper, setPaper] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?paper_id=" +
        paperId
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPaper(json.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [paperId]);

  const paperList = paper.map((paper) => (
    <div key={paper.paper_id}>
      <h3 className="flex justify-center text-lg font-bold">{paper.title}</h3>
      <p>{paper.abstract}</p>
    </div>
  ));
  return (
    <div className="align-center absolute top-0 flex min-h-full w-screen justify-center bg-modal">
      <div className="flex h-fit w-4/5 flex-col rounded-xl bg-white p-5">
        {loading ? <p>Loading...</p> : paperList}
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
