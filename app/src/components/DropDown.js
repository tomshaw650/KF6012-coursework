/**
 *
 * DropDown component to display a dropdown menu for papers
 * Allows the user to filter between all papers, award winning papers, and papers with no award
 * Pass in a handler with appropriate event handling and select values to use this component
 * The API uses null as a value for papers with no award, so we use "false" and change this to null in the handler
 *
 * @parmams handler - function to handle the dropdown selection
 * @params selectValue - the value of the dropdown selection
 *
 * @author Tom Shaw
 *
 */

export default function DropDown(props) {
  // this is the value of the dropdown selection, based on the option selected
  const onChangeSelect = (event) => props.handler(event.target.value);

  return (
    <div className="flex justify-center">
      {/* This is the dropdown menu, using the value and handler props to function */}
      <select
        className="mt-2 h-10 w-1/3 rounded-lg border-2 border-gray-300 bg-white px-5 text-center text-sm focus:outline-none"
        value={props.selectValue}
        onChange={onChangeSelect}
      >
        {/* These are hardcoded options as the DropDown is only used for papers. "all" will be the default option */}
        <option value="all">View all</option>
        <option value="true">View award winning papers</option>
        <option value="false">View non-award winning papers</option>
      </select>
    </div>
  );
}
