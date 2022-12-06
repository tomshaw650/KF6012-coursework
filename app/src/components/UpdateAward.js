/**
 *
 * Component to handle the actual updating of the DB
 * when the user selects an award or no award
 *
 * Sets the appropriate data in a form, uses JWT as a bearer token
 * to authorise the request
 *
 * Outputs a dropdown to the user, allowing them to change the award realtime
 *
 * @params paperId - The paper ID of the paper being updated
 * @params award - The current award status of the paper
 *
 * @author Tom Shaw
 *
 */

export default function UpdateAward(props) {
  // handle the dropdown, changing based on current value
  const handleSelect = (event) => {
    // creates a form we can send to the API
    const formData = new FormData();

    // appends the dropdown value to has_award and the paperId prop to paper_id
    formData.append("has_award", event.target.value);
    formData.append("paper_id", props.paperId);

    // get the token from local storage to authorise the request
    const token = localStorage.getItem("token");

    fetch(
      "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/update",
      {
        // method is POST, authorisation is a bearer token, body is the form data
        method: "POST",
        headers: new Headers({ Authorization: "Bearer " + token }),
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((json) => {
        console.log(json);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="flex justify-center">
      {/* dropdown sets a defaultValue based on the award prop, and calls the above handleSelect function on change */}
      <select
        className="mt-2 flex h-10 w-1/2 justify-center rounded-lg border-2 border-gray-300 px-5 text-center text-sm"
        defaultValue={props.award ? "true" : ""}
        onChange={handleSelect}
      >
        {/* value for No Award is "" as the DB entry is null */}
        <option value="true">Award</option>
        <option value="">No Award</option>
      </select>
    </div>
  );
}
