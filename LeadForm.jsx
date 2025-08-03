import React, { useState } from 'react';

export default function LeadForm({ onAddLead }) {
  const [form, setForm] = useState({ name: '', email: '', projekt: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddLead(form);
    setForm({ name: '', email: '', projekt: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="E-Mail" required />
      <input name="projekt" value={form.projekt} onChange={handleChange} placeholder="Projektbeschreibung" required />
      <button type="submit">Lead hinzufügen</button>
    </form>
  );
}
