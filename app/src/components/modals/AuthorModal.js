import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Portal } from "react-portal";

export const AuthorModal = () => {
  const navigate = useNavigate();
  const { authorId } = useParams();

  const [paper, setPaper] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?author_id=" +
        authorId
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setPaper(json.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [authorId]);

  const paperList = paper.map((paper) => (
    <div key={paper.paper_id}>
      <ul className="list-disc italic">
        <li>{paper.title}</li>
      </ul>
    </div>
  ));
  return (
    <Portal node={document && document.getElementById("toplevel")}>
      <div className="align-center absolute top-0 flex h-full w-screen justify-center bg-modal">
        <div className="flex h-fit w-80 flex-col rounded-xl bg-white p-5">
          <h3 className="flex justify-center text-lg font-bold">Papers</h3>
          <p className="flex justify-center">This author has worked on: </p>
          {loading ? <p>Loading...</p> : paperList}
          <button
            className="mt-10 rounded bg-orange py-2 px-4 font-bold text-white hover:bg-amber-900"
            onClick={() => navigate(-1)}
          >
            Close
          </button>
        </div>
      </div>
    </Portal>
  );
};
