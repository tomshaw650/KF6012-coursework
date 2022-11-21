export default function DropDown(props) {
  const onChangeSelect = (event) => props.handler(event.target.value);

  return (
    <div className="flex justify-center">
      <select
        className="mt-2 h-10 w-1/3 rounded-lg border-2 border-gray-300 bg-white px-5 text-center text-sm focus:outline-none"
        value={props.selectValue}
        onChange={onChangeSelect}
      >
        <option value="all">View all</option>
        <option value="true">View award winning papers</option>
        <option value="false">View non-award winning papers</option>
      </select>
    </div>
  );
}
