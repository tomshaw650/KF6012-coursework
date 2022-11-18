import React from "react";
import { Link } from "react-router-dom";

export default function Td({ children, to, className }) {
  const ContentTag = to ? Link : "div";

  return (
    <td className={className}>
      <ContentTag to={to}>{children}</ContentTag>
    </td>
  );
}
