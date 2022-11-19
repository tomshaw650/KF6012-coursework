import ConfigIcon from "../helpers/configIcon";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

import Td from "./Td";

export default function PaperList(props) {
  return (
    <tr className="hover:bg-gray-600">
      <td className="text-center text-lg">{props.paper_id}</td>
      <td className="text-center text-lg">{props.title}</td>
      <td className="translate-x-1/2">
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
      <Td
        to={`view/${props.paper_id}`}
        state={{ background: props.location }}
        className="text-center text-lg"
      >
        {props.abstract.length > 10
          ? props.abstract.substring(0, 10) + "..."
          : props.abstract}
      </Td>
      <td className="text-center text-lg">{props.track_key}</td>
      <td className="text-center text-lg">{props.track_name}</td>
    </tr>
  );
}
