import { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [fixes, setFixes] = useState([]);
  const [query, setQuery] = useState("");

  const fetchFixes = async () => {
    const res = await API.get(`/fixes?q=${query}`);
    setFixes(res.data);
  };

  useEffect(() => {
    fetchFixes();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Garage Wisdom</h1>

      <input
        placeholder="Search code or symptom..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={fetchFixes}>Search</button>

      {fixes.map(fix => (
        <div key={fix._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{fix.code} - {fix.vehicle}</h3>
          <p><b>Symptoms:</b> {fix.symptoms}</p>
          <p><b>Solution:</b> {fix.solution}</p>
          <p><b>Saved:</b> ${fix.costSaved}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
