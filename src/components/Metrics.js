import React from 'react';
import './Metrics.css';

const metrics = [
  { title: 'Total Ideas', value: 247 },
  { title: 'In Triage', value: 43 },
  { title: 'Ideas Adopted', value: 10 },
  { title: 'In Development', value: 12 },
  { title: 'Completed', value: 8 }
];

export default function Metrics() {
  return (
    <div className="metrics">
      {metrics.map((m, i) => (
        <div className="metric-card" key={i}>
          <div className="metric-title">{m.title}</div>
          <div className="metric-value">{m.value}</div>
        </div>
      ))}
    </div>
  );
}