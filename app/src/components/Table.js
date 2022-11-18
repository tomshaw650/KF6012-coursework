export default function Table(props) {
  return (
    <div className="flex justify-center">
      <table className="mt-5 w-4/5 table-fixed rounded-2xl text-white">
        <thead className="bg-black">
          <tr>
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
