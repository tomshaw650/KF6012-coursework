/**
 *
 * AuthorList component to pass fetched data into for table display
 * Uses the Td component to allow routing within a table item
 *
 * @params author_id - the id of the author, used as key and an item
 * @params location - this is to be passed a react-router useLocation variable
 * @params first_name - the first name of the author
 * @params middle_initial - the middle initial of the author
 * @params last_name - the last name of the author
 *
 * @author Tom Shaw
 *
 */

import Td from "./Td";

export default function AuthorList(props) {
  return (
    <tr className="hover:bg-gray-600" key={props.author_id}>
      {/* Uses the Td component to allow routing within a table item */}
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
