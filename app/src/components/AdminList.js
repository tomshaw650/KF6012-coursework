/**
 *
 * AdminList component to pass fetched data into for table display
 * Uses the Td component to allow routing within a table item
 * Leverages react-icon for displaying award status
 *
 * @params paper_id - The paper ID, used as a key and item
 * @params title - The title of the paper
 * @params has_award - The award status of the paper, displayed using icons
 * @params location - this is to be passed a react-router useLocation variable
 *
 * @author Tom Shaw
 *
 */

import ConfigIcon from "../helpers/configIcon";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

import Td from "./Td";

export default function AdminList(props) {
  return (
    <tr className="hover:bg-gray-600">
      <td className="text-center text-lg">{props.paper_id}</td>
      <td className="text-center text-lg">{props.title}</td>
      <Td
        to={`edit/${props.paper_id}`}
        state={{ background: props.location }}
        className="translate-x-1/2"
      >
        {/* if the paper has an award, display a checkmark, otherwise display a cross */}
        {props.has_award === null ? (
          <ConfigIcon>
            <FaTimesCircle />
          </ConfigIcon>
        ) : (
          <ConfigIcon>
            <FaCheckCircle />
          </ConfigIcon>
        )}
      </Td>
    </tr>
  );
}
