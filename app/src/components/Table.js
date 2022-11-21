/**
 *
 * Table component for rendering a table
 * @params headers - array of strings for the table headers, also used as a key
 * @params tableBody - allows data to be passed into the body, set by PaperList or AuthorList
 *
 * @author Tom Shaw
 *
 */
export default function Table(props) {
  return (
    <div className="flex justify-center">
      <table className="mt-5 w-4/5 table-fixed rounded-2xl text-white">
        <thead className="bg-black">
          <tr>
            {/* map the headers array to create the table headers */}
            {props.headers.map((header) => (
              <th className="p-4 text-center text-xl font-bold" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{props.tableBody}</tbody>
      </table>
    </div>
  );
}
