import Td from "./Td";

export default function AuthorList(props) {
  return (
    <tr className="hover:bg-gray-600" key={props.author_id}>
      <Td
        to={`${props.author_id}`}
        state={{ background: props.location }}
        className="text-center text-lg"
      >
        {props.author_id}
      </Td>
      <td className="text-center text-lg">{props.first_name}</td>
      <td className="text-center text-lg">{props.middle_initial}</td>
      <td className="text-center text-lg">{props.last_name}</td>
    </tr>
  );
}
