/**
 *
 * SearchBar component allows for searching data based on the API
 * used in Paper,Track and Author pages
 *
 * @params setSearchTerm - function to set the search term, passed a state variable
 *
 * @author Tom Shaw
 *
 */

export default function SearchBar(props) {
  // this is the handler for the search bar, set based on input
  const handleChange = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center">
      {/* The placeholder is of input elements is not read by screenreaders, so it is added here and hidden */}
      <span className="sr-only">
        Search papers by their title or abstract...
      </span>
      <input
        className="mt-2 h-10 w-1/3 rounded-lg border-2 border-gray-300 bg-white px-5 text-sm focus:outline-none"
        type="search"
        placeholder="Search papers by their title or abstract..."
        onChange={handleChange}
      />
    </div>
  );
}
