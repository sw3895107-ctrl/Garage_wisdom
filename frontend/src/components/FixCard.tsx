import React from "react";

interface FixCardProps {
  fix: {
    code: string;
    vehicle: string;
    symptoms: string;
    solution: string;
    costSaved: number;
  };
}

const FixCard: React.FC<FixCardProps> = ({ fix }) => (
  <div style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}>
    <h3>{fix.vehicle} - {fix.code}</h3>
    <p><strong>Symptoms:</strong> {fix.symptoms}</p>
    <p><strong>Solution:</strong> {fix.solution}</p>
    <p><strong>Cost Saved:</strong> ${fix.costSaved}</p>
  </div>
);

export default FixCard;
