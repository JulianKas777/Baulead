import React, { useState } from 'react';
import LeadForm from './components/LeadForm';
import Dashboard from './components/Dashboard';

export default function App() {
  const [leads, setLeads] = useState([]);

  const addLead = (lead) => setLeads([...leads, lead]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>BauLead – Online Demo</h1>
      <LeadForm onAddLead={addLead} />
      <Dashboard leads={leads} />
    </div>
  );
}
