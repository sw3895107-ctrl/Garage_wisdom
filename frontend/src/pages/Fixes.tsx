import React, { useEffect, useState } from "react";
import { API } from "../api";
import FixCard from "../components/FixCard";

interface Fix {
  _id: string;
  code: string;
  vehicle: string;
  symptoms: string;
  solution: string;
  costSaved: number;
}

const Fixes = () => {
  const [fixes, setFixes] = useState<Fix[]>([]);

  useEffect(() => {
    API.get("/fixes").then(res => setFixes(res.data));
  }, []);

  return (
    <div>
      <h2>Approved Fixes</h2>
      {fixes.map(fix => <FixCard key={fix._id} fix={fix} />)}
    </div>
  );
};

export default Fixes;
