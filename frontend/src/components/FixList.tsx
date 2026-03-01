import React from "react";

interface Props {
  fixes: any[];
}

const FixList: React.FC<Props> = ({ fixes }) => (
  <ul>
    {fixes.map((fix) => (
      <li key={fix._id}>
        {fix.vehicle} - {fix.code} - {fix.solution} (${fix.costSaved})
      </li>
    ))}
  </ul>
);

export default FixList;
