/**
 *
 * Td is a very handy component for allowing routing within a table item
 * Allows us to pass in a Link to <td> and have it work as expected
 *
 * @author Tom Shaw
 *
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Td({ children, to, className }) {
  // if the to prop is passed, return a Link, otherwise return a td
  const ContentTag = to ? Link : "div";

  return (
    <td className={className}>
      <ContentTag to={to}>{children}</ContentTag>
    </td>
  );
}
