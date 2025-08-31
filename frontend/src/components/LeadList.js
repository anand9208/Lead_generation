import React, { useEffect, useState } from "react";

function LeadList() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then(setLeads);
  }, []);

  return (
    <div>
      <h2>Leads</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead._id}>
            {lead.name} - {lead.email} - {lead.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeadList;