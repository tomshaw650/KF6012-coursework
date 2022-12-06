export default function UpdateAward(props) {
  // handle the dropdown, changing based on current value
  const handleSelect = (event) => {
    // creates a form we can send to the API
    const formData = new FormData();

    // appends the award value and paper_id to the form
    formData.append("has_award", event.target.value);
    formData.append("paper_id", props.paperId);

    // get the token from local storage to authorise the request
    const token = localStorage.getItem("token");

    fetch(
      "http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/update",
      {
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
      <select
        className="mt-2 flex h-10 w-1/2 justify-center rounded-lg border-2 border-gray-300 px-5 text-center text-sm"
        defaultValue={props.award ? "true" : ""}
        onChange={handleSelect}
      >
        <option value="true">Award</option>
        <option value="">No Award</option>
      </select>
    </div>
  );
}
