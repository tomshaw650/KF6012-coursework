export default function SearchBar(props) {
  const handleChange = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center">
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
