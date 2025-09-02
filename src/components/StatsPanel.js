import React from 'react';
import './StatsPanel.css';
import './Card.css'; // Import shared card style

function StatsPanel() {
  const stats = [
    { label: 'Total Ideas', value: 247, color: 'blue' },
    { label: 'In Triage', value: 43, color: 'yellow' },
    { label: 'Ideas Adopted', value: 10, color: 'green' },
    { label: 'In Development', value: 12, color: 'cyan' },
    { label: 'Completed', value: 8, color: 'purple' },
  ];

  return (
    <div className="card">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-box ${stat.color}`}>
          <h3>{stat.label}</h3>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsPanel;