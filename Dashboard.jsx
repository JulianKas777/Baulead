import React from 'react';

export default function Dashboard({ leads }) {
  return (
    <div>
      <h2>Leads ({leads.length})</h2>
      <ul>
        {leads.map((lead, idx) => (
          <li key={idx}>
            <strong>{lead.name}</strong> – {lead.email} <br />
            {lead.projekt}
          </li>
        ))}
      </ul>
    </div>
  );
}
