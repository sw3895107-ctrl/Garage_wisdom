import React, { useState } from "react";
import { submitFix } from "../api";

interface Props {
  token: string;
  onSubmit: () => void;
}

const FixForm: React.FC<Props> = ({ token, onSubmit }) => {
  const [form, setForm] = useState({ code: "", vehicle: "", symptoms: "", solution: "", costSaved: 0 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitFix(token, form);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Code" value={form.code} onChange={e => setForm({...form, code: e.target.value})} />
      <input placeholder="Vehicle" value={form.vehicle} onChange={e => setForm({...form, vehicle: e.target.value})} />
      <input placeholder="Symptoms" value={form.symptoms} onChange={e => setForm({...form, symptoms: e.target.value})} />
      <input placeholder="Solution" value={form.solution} onChange={e => setForm({...form, solution: e.target.value})} />
      <input type="number" placeholder="Cost Saved" value={form.costSaved} onChange={e => setForm({...form, costSaved: Number(e.target.value)})} />
      <button type="submit">Submit Fix</button>
    </form>
  );
};

export default FixForm;
