import React, { useEffect, useState } from "react";
import { getFixes, submitFix, login } from "./api";
import FixList from "./components/FixList";
import FixForm from "./components/FixForm";

const App: React.FC = () => {
  const [fixes, setFixes] = useState<any[]>([]);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    async function fetchFixes() {
      const data = await getFixes();
      setFixes(data);
    }
    fetchFixes();
  }, []);

  return (
    <div className="App">
      <h1>Garage Wisdom</h1>
      {token ? (
        <FixForm token={token} onSubmit={async () => {
          const data = await getFixes();
          setFixes(data);
        }} />
      ) : (
        <button onClick={async () => {
          const res = await login("garageadmin@example.com", "Admin1212");
          setToken(res.token);
        }}>Login as Admin</button>
      )}
      <FixList fixes={fixes} />
    </div>
  );
};

export default App;
