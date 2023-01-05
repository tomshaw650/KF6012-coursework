/**
 *
 * PaperList component to pass fetched data into for table display
 * Uses the Td component to allow routing within a table item
 * Leverages react-icon for displaying award status
 *
 * @params paper_id - The paper ID, used as a key and item
 * @params title - The title of the paper
 * @params has_award - The award status of the paper, displayed using icons
 * @params location - this is to be passed a react-router useLocation variable
 * @params abstract - The abstract of the paper. uses String.prototype.substring() to limit the length of the abstract
 * @params video - the video link associated with the paper
 * @params track_key - The short track name of the paper
 * @params track_name - The full track name of the paper
 *
 * @author Tom Shaw
 *
 */

import ConfigIcon from "../helpers/configIcon";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

import Td from "./Td";

export default function PaperList(props) {
  return (
    <tr className="hover:bg-gray-600">
      <td className="text-center text-lg">{props.paper_id}</td>
      <td className="text-center text-lg">{props.title}</td>
      <Td
        to={`authors/${props.paper_id}`}
        state={{ background: props.location }}
        className="text-center text-lg"
      >
        View
      </Td>
      <td className="translate-x-1/2">
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
      </td>
      {/* Uses the Td component to allow routing within a table item. for displaying a modal */}
      <Td
        to={`view/${props.paper_id}`}
        state={{ background: props.location }}
        className="text-center text-lg"
      >
        {/* abstracts are long! String.prototype.substring() limits the length of the abstract */}
        {props.abstract.length > 10
          ? props.abstract.substring(0, 10) + "..."
          : props.abstract}
      </Td>
      <td className="text-center text-lg">
        <a target="_blank" rel="noreferrer" href={props.video}>
          Link
        </a>
      </td>
      <td className="text-center text-lg">{props.track_name}</td>
    </tr>
  );
}
